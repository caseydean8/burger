const express = require('express')

const router = express.Router()

// import from model
const burger = require('../models/burger.js')

router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        let handlebarsObj = { burgers: data }
        console.log(handlebarsObj)
        res.render('index', handlebarsObj)
    })
})


// export to server.js
module.exports = router