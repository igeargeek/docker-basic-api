/* eslint-disable no-console */
const mongoose = require('mongoose')

const { MONGO_CONNECT_URI, MONGO_DB_NAME } = process.env

let instance

const connect = async () => {
  if (!instance) {
    mongoose.connect(`${MONGO_CONNECT_URI}/${MONGO_DB_NAME}`, { useNewUrlParser: true, useFindAndModify: false, })
    instance = mongoose.connection
    instance.on('error', console.error.bind(console, 'connection error:'))
    instance.once('open', () => {
      console.info('MongoDB is connected.')
    })
  }
  return instance
}

module.exports = connect
