import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { inputOptions } from './options';

const choices = fs.readdirSync(path.join(__dirname, 'templates'));
const questions = [
{
    name: 'template',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: choices
},
{
    name: 'name',
    type: 'input',
    message: 'Project name:'
}];

async function runCli(){
    const answers = await inquirer.prompt(questions);
    const CURR_DIR = process.cwd();
    const projectChoice = answers['template'];
    const projectName = answers['name'];
    const templatePath = path.join(__dirname, 'templates', projectChoice);
    const tartgetPath = path.join(CURR_DIR, projectName);
    const options: inputOptions = {
        projectName,
        templateName: projectChoice,
        templatePath,
        tartgetPath
    }
}
