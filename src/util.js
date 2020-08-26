const fs = require('fs');
const templates = require('./templateMapping');
const path = require('path');

exports.createProject = projectPath => {
    if (fs.existsSync(projectPath)) {
        throw new Error(`Folder ${projectPath} exists. Delete or use another name`);
    }
    fs.mkdirSync(projectPath);
    return true;
};

exports.createDirectoryContents = (templatePath, projectName) => {
    // list of file/folder that should not be copied
    const SKIP_FILES = ['node_modules', 'dist'];
    // read all files/folders (1 level) from template folder
    const filesToCreate = fs.readdirSync(templatePath);
    // loop each file/folder
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        // get stats about the current file
        const stats = fs.statSync(origFilePath);
        // skip files that should not be copied
        if (SKIP_FILES.indexOf(file) > -1) return;
        const CURR_DIR = process.cwd();
        if (stats.isFile()) {
            // read file content and transform it using template engine
            let contents = fs.readFileSync(origFilePath, 'utf8');
            // write file to destination folder
            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
            // create folder in destination folder
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
            // copy files/folder inside current folder recursively
            this.createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}

exports.isValidTemplate = (template, choices) => {
    console.log(choices);
    console.log("vaa vaa")
    if (choices.includes(template)) {
        return template;
    } else {
        if (templates[template]) {
            return templates[template];
        } else {
            throw new Error(`Template ${template} does not exist. Please input a valid template or select from list`)
        }
    }
}