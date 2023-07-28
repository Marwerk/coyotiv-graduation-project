const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
const Cat = mongoose.model('Cat', { name: String, free: Boolean })

try {
  const kitty = new Cat({ name: 'Horus', free: true })
  kitty.save().then(() => console.log('meow'))
} catch (error) {
  console.log('This is the error:', error)
}
