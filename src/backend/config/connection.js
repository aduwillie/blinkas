import { Database } from 'ad-barrel';
let connection = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'sample_database_user',
        password: 'database_password',
        database: 'database_name'
    }
};

const DB = new Database(connection);
if(!(DB.isRedisReady() && DB.isSQLReady())){
    throw new Error('One or all of the database connections is/are not ready');
}
module.exports = DB;