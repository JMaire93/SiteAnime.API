const express = require('express')
const app = express()
const connectDB = require('./serveurMongo/ConnectDB.js')
const animes = require('./routers/animeRouter.js')
const detail = require('./routers/detailRouter.js')
const signIn = require('./routers/signInRouter.js')
const login = require('./routers/loginRouter.js')
const admin = require('./routers/adminRouter.js')
const users = require('./routers/usersRouter.js')
const animeElements = require('./routers/animeElementsRouter.js')
const session = require('express-session')
const ejs = require('ejs')
const cors = require('cors')

app.use(express.static('uploads'))
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {secure: false}
}))
app.use('/animes', animes)
app.use('/detail', detail)
app.use('/signin', signIn)
app.use('/login', login)
app.use('/admin', admin)
app.use('/users', users)
app.use('/animeElements', animeElements )

connectDB()
app.listen(3000)