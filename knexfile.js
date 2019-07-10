module.exports = {
    development: {
        client: 'mysql',
        connection: '127.0.0.1',
        migrations: {
            directory: __dirname + '/src/backend/database/migrations'
        }
    },
    production: {
        client: 'mysql',
        connection: '127.0.0.1',
        migrations: {
            directory: __dirname + '/src/backend/database/migrations'
        }
    }
}
