import { DBModel } from 'ad-barrel';

import DB from './../../config/connection';

const UserModel = new DBModel(DB.knex, 'users')
DB.addModel('User', UserModel);
module.exports = UserModel;
