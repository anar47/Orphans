const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const AdminJS = require('adminjs')
const session = require('express-session')
const cookie_parser = require('cookie-parser')
const AdminJSMongoose = require('@adminjs/mongoose')
const AdminJSExpress = require('@adminjs/express')
const Auth = require('./routes/Auth')
const Test = require('./routes/Test')
const User = require('./routes/User')
const Question = require('./routes/Question')
AdminJS.registerAdapter(AdminJSMongoose)

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 9000
let server

// -------------- making the admin dashboard

//config adminJS

const config = require('./.adminjs/config')

const {UserResourceOptions} = require('./.adminjs/resources/user.options')
const {QuestionResourceOptions} = require('./.adminjs/resources/question.options')
const {TestResourceOptions} = require('./.adminjs/resources/test.options')
const { useRecords } = require('adminjs')

const start = async () => {

    const adminJS = new AdminJS({
        databases: [],
        rootPath: '/admin',
        resources: [ UserResourceOptions, TestResourceOptions, QuestionResourceOptions],
        branding: {
            logo: false,
            companyName: 'Salva Vita',
        }
    })
  const adminRouter = AdminJSExpress.buildRouter(adminJS)
  app.use(adminJS.options.rootPath, adminRouter)
  app.use(express.json()); // after mounting adminJS route to avoid conflict
}


//middleware config -> every time the server gets requests these functions are run
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookie_parser())
//session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    /*store: new mongoose({mongooseConnection: mongoose.connection}) */
}))

// Routes

app.use('/auth', Auth)
app.use('/test', Test)
app.use('/user', User)
app.use('/question', Question)

mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log('Database connection established'))
.catch(er => console.log('Error connecting to mongodb instance: ', er))

start()

server = app.listen(PORT, ()=>{
    console.log('Node server running on port: ${PORT}')
})

