'use strict';

const Hapi = require('hapi');
const exampleAPIHandler = require('./handlers/api');

const port = process.env.SIGNUP_API_PORT || '8090';
const host = process.env.SIGNUP_HOST || '127.0.0.1';

const init = async () => {
    const server = Hapi.server({
        port,
        host
    });

    server.route({
        method: 'GET',
        path: '/api/{p*}',
        handler: (request, h) => {
            return exampleAPIHandler();
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
}

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();