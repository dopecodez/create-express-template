const path = require('path');
const util = require('./util');
const editJsonFile = require("edit-json-file");

module.exports = async (input) => {
    const CURR_DIR = process.cwd();
    const templatePath = path.join(__dirname, 'templates', input.template);
    const targetPath = path.join(CURR_DIR, input.destinationFolder);
    if (util.createProject(targetPath)) {
        util.createDirectoryContents(templatePath, input.destinationFolder);
    }
    let file = editJsonFile(`${targetPath}/package.json`, {autosave:true});
    file.set("name", input.destinationFolder);
    return;
}
