import mongoose from 'mongoose';
import env from './env';

const dbHost = {
  dev: 'mongodb://localhost/dogpark',
  production: 'xxxxx'
};

mongoose.connect(dbHost[env.name]);
mongoose.Promise = require('bluebird');

export default mongoose;