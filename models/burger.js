// import orm (will '../config/orm' work)
const orm = require('../config/orm.js')

const burger = {
    selectAll: function(a) {
        orm.selectAll('burgers', function(res) {
            a(res)
        })
    }
}

// export to controller
module.exports = burger