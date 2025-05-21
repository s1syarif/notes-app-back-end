const Hapi = require('@hapi/hapi');
const routes = require('./routes');  // Import routing


const init = async () => {
    const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
        cors: {
        origin: ['*'],
        },
    },
    });

    // Daftarkan routes
    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();