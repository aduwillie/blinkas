/* eslint-disable */
import Hapi from '@hapi/hapi';
import pug from 'pug';
import Vision from '@hapi/vision';
import Inert from 'inert';
import Path from 'path';

import constants from '../../constants';
 
const init = async (shouldStart) => {
    const server = Hapi.server({
        port: constants.DEFAULT_PORT
        });
    await server.register(Vision);
    await server.register(Inert);
    server.views({
        engines: {
            pug: pug
        },
        relativeTo: __dirname,
        path: './views'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index')
        }
    });
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory:{
                path: 'dist/',
                listing: true
            }
        }
    })
    if(shouldStart){
        await server.start();
        console.log('Server running on ', server.info.uri);
    }
};
process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});
process.on('uncaughtException', (err) => {
    console.error(err);
    process.exit(1);
});
export default init;
