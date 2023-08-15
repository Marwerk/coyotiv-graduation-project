const path = require('path')
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')

const mongoose = require('mongoose')

require('dotenv').config()
require('./database-connection')

// requires the model with Passport-Local Mongoose plugged in
const passport = require('passport')
const User = require('./models/user')

// use static authenticate method of model in LocalStrategy
passport.use(User.createStrategy())

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Here we "require" the routes
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const hotelsRouter = require('./routes/hotels')
const bookingsRouter = require('./routes/bookings')
const roomsRouter = require('./routes/rooms')
const accountsRouter = require('./routes/accounts')
const dropDbRouter = require('./routes/drop-db')

const app = express()

// CORS
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

const clientPromise = mongoose.connection
  .asPromise()
  // eslint-disable-next-line no-return-assign, no-param-reassign
  .then(connection => (connection = connection.getClient()))

app.use(
  session({
    secret: 'asdfg25050525!!__rwet5',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'development',
      maxAge: 1000 * 60 * 60 * 24 * 15, // cookie expires after 15 days
    },
    store: MongoStore.create({ clientPromise, stringify: false }),
  })
)

app.use(passport.session())

app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0
  req.session.numberOfVisits = numberOfVisits + 1
  req.session.history = req.session.history || []
  req.session.history.push({ url: req.url, date: new Date(), ip: req.ip })

  console.log(req.session)

  next()
})

// express.js
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Here we "build" the routes
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/hotels', hotelsRouter)
app.use('/bookings', bookingsRouter)
app.use('/rooms', roomsRouter)
app.use('/accounts', accountsRouter)
app.use('/drop-db', dropDbRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
