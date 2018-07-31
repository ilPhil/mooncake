const mongoose = require('mongoose');
const mongodbUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const options = {
  useNewUrlParser: true,
  keepAlive: true,
  reconnectTries: 30
};

mongoose.connect(mongodbUri, options)

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => console.log(`Database connected`));
mongoose.connection.on('error', (err) => console.log(`Database connection error ${err}`));
mongoose.connection.on('disconnected', () => console.log(`Mongoose disconnected`));
