const fs= require('fs')
const path = require('path')

module.exports = async(input) => {
    const CURR_DIR = process.cwd();
    const templatePath = path.join(__dirname, 'templates', input.template);
    const tartgetPath = path.join(CURR_DIR, input.destinationFolder);
    const options = {
        destinationFolder: input.destinationFolder,
        templateName: input.template,
        templatePath,
        tartgetPath
    }
}
