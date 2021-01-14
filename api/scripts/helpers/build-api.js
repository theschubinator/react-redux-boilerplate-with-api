const SwaggerParser = require('swagger-parser');
const config = require('../../config');
const fs = require('fs-extra');
const chalk = require('chalk');

const writeDereferencedApiToOutputDirectory = (api) => {
    const apiBundledPath = config.apiBundledPath;

    fs.outputFileSync(apiBundledPath, JSON.stringify(api));
    console.log(chalk.magenta('swagger document dereferenced in %s'), apiBundledPath);
}

module.exports = async (callback = () => null) => {
    try {
        const api = await SwaggerParser.dereference(config.apiFilepath)
        return writeDereferencedApiToOutputDirectory(api);
    } catch(err) {
        throw (chalk.red(err))
    }
};
