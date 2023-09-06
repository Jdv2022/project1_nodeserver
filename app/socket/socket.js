const express = require("express")
const app = express()
const server = app.listen(90)
const io = require('socket.io')(server)
const Traffics = require('../controllers/traffics')
const jwt = require('jsonwebtoken')

async function Q(){
    try {
        const result = await Traffics.sockettraffic()
        io.emit('to', result)
    } 
    catch (error) {
        console.error('Error:', error)
    }
}

function jwtTokenIsValid(token) {
    if (!token) {
      return false // No token provided
    }
    try {
        // Parse the token and verify its contents
        const decodedToken = jwt.verify(token, 'your-secret-key')
        // Check additional conditions if needed, such as expiration
        return true // Token is valid
    } catch (error) {
        return false // Token is invalid
    }
}

io.on('connect', async function (socket) {
    const token = socket.handshake.query.token
    let intervalId = null
    if (jwtTokenIsValid(token)) {
        intervalId = setInterval( async ()=>{
            Q()
        }, 10000)
    } 
    else {
        console.log('serversocket not connected, invalid token')
        // Token is invalid, reject the connection or handle it accordingly
    }
    socket.on('disconnect', () => {
        if (intervalId !== null) {
            clearInterval(intervalId)
        }
    })
})

module.exports = io
console.log('Socket running!')
