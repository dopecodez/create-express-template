const templates = require('./templateMapping').templateMapping;
const editJsonFile = require("edit-json-file");
const exec = require('execa');

exports.isValidTemplate = (template, choices) => {
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

exports.editPackageJson = (path, projectName) => {
    let file = editJsonFile(path, {autosave:true});
    file.set("name", projectName);
    return;
}

exports.installNodeModules = async (pkgManager, path) => {
    const result = await exec(`${pkgManager} install`,
        { cwd: path, stdio:"inherit" });
    return result;
}