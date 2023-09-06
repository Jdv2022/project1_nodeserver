//-----------------------------__dir & port-------------------------------//
//require express
const express = require("express")

//create the express app
const app = express()

//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

//require cors
const cors = require('cors')
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://excel2charts.online',
    'https://excel2charts.online',
]
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.includes(origin)) {
            callback(null, true)
        } 
        else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}))

//auth tokens
const authToken = require('./tokenauth')
app.use(authToken)

//path module
const path = require("path")
const staticMiddleware = require('./route')

//static-content
app.use(express.static(path.join(__dirname, "../views")))
app.use(express.static(path.join(__dirname, "../assets")))

//ejs-content
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

//load the routes
app.use(staticMiddleware)

//listen to port xxxx
app.listen(80)

console.log("listening on port 80")