/* eslint-disable */
import Hapi from '@hapi/hapi';
import pug from 'pug';
import Vision from '@hapi/vision';

import constants from '../../constants'
 
const init = async (shouldStart) => {
    const server = Hapi.server({
        port: constants.DEFAULT_PORT
        });
    await server.register(Vision);
    server.views({
        engines: {
            pug: pug
        },
        relativeTo: __dirname,
        path: './../bakckend/views'
    });
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'hello world';
        }
    });
    if(shouldStart){
        await server.start();
        console.log('Server running on ', server.info.uri);
    }
};
process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
})
process.on('uncaughtException', (err) => {
    console.error(err);
    process.exit(1);
})
export default init;
