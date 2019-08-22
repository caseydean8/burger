// import connection.js
            // can this be ('./connection')?
const connection = require('./connection.js')

const orm = {
    selectAll: function(table) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insert1: function(table, column) {
        const queryString = "INSERT INTO ?? VALUES ?";
        connection.query(queryString, [table, column], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    update1: function(table, column, column2, id) {
        //UPDATE table1 SET col_a='k1', col_b='foo' WHERE key_col='1';
        const queryString = "UPDATE ?? SET ??, ??,  WHERE ??";
        connection.query(queryString, [table, column, column2, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}

module.exports = orm;