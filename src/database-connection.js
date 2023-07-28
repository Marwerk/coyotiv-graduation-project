const chalk = require('chalk')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log(chalk.bgGreenBright('<---- Connected to MongoDB ---->')))

// const Cat = mongoose.model('Cat', { name: String, free: Boolean })

// const kitty = new Cat({ name: 'Horus', free: true })
// kitty.save().then(() => console.log('meow'))
