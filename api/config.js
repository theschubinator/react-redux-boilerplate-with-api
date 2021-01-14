
const path = require('path');

const appRoot = __dirname;
const distDirectory = path.join(appRoot, 'dist');

module.exports = Object.freeze({
    apiFilepath: path.join(appRoot, 'documentation', 'api.yaml'),
    appRoot,
    distDirectory,
    apiBundledPath: path.join(distDirectory, 'documentation', 'api.yaml'),
    dataPath: path.join(appRoot, 'mockData'),
    handlersPath: path.join(appRoot, 'handlers')
});
