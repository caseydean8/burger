// import orm (will '../config/orm' work)
const orm = require('../config/orm.js')

const burger = {
    selectAll: function(a) {
        orm.selectAll('burgers', (res) => {
            a(res)
        })
    },
    insertOne: function(column, values, a) {
        orm.insertOne('burgers', column, values, function(res) {
            a(res)
        })
    }
}

// export to controller
module.exports = burger