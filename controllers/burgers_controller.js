const express = require('express')

const router = express.Router()

// import from model
const burger = require('../models/burger.js')

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let handlebarsObj = { burgers: data }
        console.log(handlebarsObj)
        res.render('index', handlebarsObj)
    })
})

router.post('/', function(req, res) {
    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], (result) => {
        res.json({id: result.insertId})
    })
})


// export to server.js
module.exports = router