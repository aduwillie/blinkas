import knex from 'knex';
import knexConfig from '../../../knexfile';
let environment = process.env.NODE_ENV || 'development';
let config = knexConfig[environment];
module.exports = knex(config);
