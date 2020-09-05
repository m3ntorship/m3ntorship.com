const { join } = require('path');

const { MongoClient, ObjectId } = require('mongodb');
// const url = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@charity.ros2p.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

module.exports.createClient = (envfile) => {
  require('dotenv').config({ path: join(__dirname, envfile) });
  return MongoClient.connect(
    'mongodb+srv://charity.ros2p.mongodb.net',
    {
      ssl: true,
      useUnifiedTopology: true,
      w: 'majority',

      replicaSet: 'charity',
      auth: {
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD
      }
    }
  );}