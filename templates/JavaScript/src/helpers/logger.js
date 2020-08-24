'use strict';

const winston = require('winston');
require('winston-daily-rotate-file');

const LOGGER_PATH = process.env.LOGGER_PATH || 'logs';
const HOMEPATH = process.env.HOME || process.env.HOMEPATH;
// Import Functions
const { Console } = winston.transports;

// Align the messages
const alignedWithColorsAndTime = winston.format.combine(
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info) => {
        const { timestamp, level, message, ...args } = info;
        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message} ${
            Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
            }`;
    })
);
// Init Logger
const winstonLogger = winston.createLogger({
    level: 'info',
    format: alignedWithColorsAndTime
});

// Creating the transports.
const errTransport = new (winston.transports.DailyRotateFile)({
    filename: `${HOMEPATH}/${LOGGER_PATH}/%DATE%-error.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    level: 'error',
});
const infoTransport = new (winston.transports.DailyRotateFile)({
    filename: `${HOMEPATH}/${LOGGER_PATH}/%DATE%-common.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
});
winstonLogger.add(errTransport);
winstonLogger.add(infoTransport);

/**
 * For development, print to the console.
 */
if (process.env.NODE_ENV !== 'production') {
    const errorStackFormat = winston.format((info) => {
        if (info.stack) {
            console.log(info.stack);
            return false;
        }
        return info;
    });
    const consoleTransport = new Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
            errorStackFormat(),
        ),
    });
    winstonLogger.add(consoleTransport);
} 
// Export logger
module.exports = winstonLogger;