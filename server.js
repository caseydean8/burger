const express = require('express')

const orm = require('./config/orm.js')

orm.select('burgers')

// orm.insert('burgers', '',)

// orm.update1('', '', '', '')