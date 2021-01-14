const Hapi = require('hapi');
const config = require('../../config');
const swaggerUiAssetPath = require('swagger-ui-dist').getAbsoluteFSPath();
const chalk = require('chalk');

function serveBundledApi(server) {
    server.route({
        method: 'GET',
        path: '/api',
        handler: {
            file: config.apiBundledPath
        }
    });
}

function serveSwaggerUI(server) {
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: swaggerUiAssetPath,
                index: true
            }
        }
    });
}

const noOp = () => null;

module.exports = () => {
    const server = Hapi.Server({
        host: '0.0.0.0',
        port: 8000
    });

    return async (callback = noOp) => {

        try {
            await server.register(require('inert'));

            serveBundledApi(server);
            serveSwaggerUI(server);

            await server.register({
                plugin: require('hapi-openapi'),
                options: {
                    api: config.apiBundledPath,
                    handlers: config.handlersPath
                }
            })

            await server.start()

            console.log(chalk.cyan('swagger preview server running at http://localhost:%s?url=api'), server.info.port);

            callback();
        } catch (err) {
            throw chalk.red(err);
        }
    };
};
