const path = require('path');
const util = require('./util');

module.exports = async (input) => {
    const CURR_DIR = process.cwd();
    const templatePath = path.join(__dirname, 'templates', input.template);
    const targetPath = path.join(CURR_DIR, input.destinationFolder);
    if (util.createProject(targetPath)) {
        util.createDirectoryContents(templatePath, input.destinationFolder, CURR_DIR);
    }
    return;
}
