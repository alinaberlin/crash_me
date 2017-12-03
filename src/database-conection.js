const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connectionString = process.env.DB_URL || 'mongodb://localhost:27017/crashme'

mongoose.connect(connectionString, {useMongoClient: true})
