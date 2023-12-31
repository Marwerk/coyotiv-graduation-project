const path = require('path')
const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const passport = require('passport')

const User = require('./models/user')

require('dotenv').config()
require('./database-connection')

// Passport setup
passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

// Require the routes
const usersRouter = require('./routes/users')
const hotelsRouter = require('./routes/hotels')
const bookingsRouter = require('./routes/bookings')
const roomsRouter = require('./routes/rooms')
const accountsRouter = require('./routes/accounts')

const app = express()
app.set('trust proxy', 1)

// CORS
// in the future, origin should be your frontend_url
app.use(cors({ origin: true, credentials: true }))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Session setup
const clientPromise = mongoose.connection
  .asPromise()
  // eslint-disable-next-line no-return-assign, no-param-reassign
  .then(connection => (connection = connection.getClient()))

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  },
  store: MongoStore.create({ clientPromise, stringify: false }),
})

app.use(sessionMiddleware)

app.use(passport.initialize())
app.use(passport.session())

// Middleware to track number of visits and history of each session
app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0
  req.session.numberOfVisits = numberOfVisits + 1
  req.session.history = req.session.history || []
  req.session.history.push({ url: req.url, date: new Date(), ip: req.ip })

  // console.log('Number of visits:', req.session.numberOfVisits)

  next()
})

// express.js
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Build the routes
app.use('/users', usersRouter)
app.use('/hotels', hotelsRouter)
app.use('/bookings', bookingsRouter)
app.use('/rooms', roomsRouter)
app.use('/accounts', accountsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// Express.js error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.send(err)
})

module.exports = app
