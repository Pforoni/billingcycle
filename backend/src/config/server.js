const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//interpreta todas as requisições do server quando o formato for urlencoded
server.use(bodyParser.urlencoded({extended: true}))
//Parser quando for json
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`BackEnd is running on port ${port}.`)
})

module.exports = server