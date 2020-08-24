const fs= require('fs');
const path = require('path');
const inquirer = require('inquirer');

module.exports = async (options, destinationFolder) => {
    const pkgManager = options.yarn ? 'yarn' : 'npm';
    let template = options.default ? 'TypeScript' : null;
    template = options.template ? options.template : template;
    const choices = fs.readdirSync(path.join(__dirname, 'templates'));

    if (destinationFolder && template) {
        return {
            ...options,
            destinationFolder: destinationFolder,
            pkgManager: pkgManager,
            template: template
        };
    }

    const prompts = [
        {
            name: 'name',
            type: 'input',
            when: () => destinationFolder ? true : false,
            message: 'Project name:'
        },
        {
            name: 'template',
            type: 'list',
            when: template ? true : false,
            message: 'What project template would you like to generate?',
            choices: choices
        }];

    const answers = await inquirer.prompt(prompts);

	return {
        ...options,
        pkgManager: pkgManager,
		destinationFolder: answers.name,
		template: answers.template,
	};
};