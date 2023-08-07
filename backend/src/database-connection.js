const chalk = require('chalk')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log(chalk.bgGreenBright('<---- Connected to MongoDB ---->')))
  .catch(err => console.log(chalk.bgRedBright('Could not connect to MongoDB', err)))
