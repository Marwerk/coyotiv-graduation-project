const chalk = require('chalk')
const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING)
  .then(() => console.log(chalk.bgGreenBright('<---- Connected to MongoDB ---->')))

/* Main takeaways from lecture

1)  If we manipulate an object in memory, we can use the .save() method (comes from mongoose) to persist the changes to the database

2) Whenever you touch DB, await it

*/
