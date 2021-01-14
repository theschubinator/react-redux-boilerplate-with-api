const buildApi = require('./helpers/build-api');
const createPreviewServer = require('./helpers/create-preview-server');
const chokidar = require('chokidar');
const config = require('../config');
const path = require('path');

function rebuildBundleOnChanges() {
    const apiDirectory = path.join(config.appRoot, 'api', '**', '*.yaml');

    chokidar.watch(apiDirectory, {
        ignoreInitial: true
    }).on('all', function () {
        buildApi();
    });
}

const server = createPreviewServer();

server(rebuildBundleOnChanges)

module.exports = () => {
    server(rebuildBundleOnChanges)
}
