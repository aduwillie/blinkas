const Hapi = require('@hapi/hapi');
const pug = require('pug');
const Vision = require('@hapi/vision'); 

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    await server.register(Vision);
    server.views({
        engines: {
            pug: pug
        },
        relativeTo: __dirname,
        path: './../frontend/views'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'hello world'
        }
    });
    await server.start();
    console.log('Server running on ', server.info.uri)
};
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();
