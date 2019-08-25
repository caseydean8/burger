// import connection.js

const connection = require('./connection')

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// orm is a constructor?
var orm = {
    selectAll: (table, a) => {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, result) => {
            if (err) throw err;
            a(result);
        });
    },
    insertOne: function(table, column, values, a) {
      console.log("orm contacted")
      let queryString = `INSERT INTO ${table} (${column}) VALUES (?, ?)`

      // let queryString = "INSERT INTO " + table;
      // queryString += " (";
      // queryString += column.toString();
      // queryString += ") ";
      // queryString += "VALUES (";
      // queryString += printQuestionMarks(values.length);
      // queryString += ") ";

    
        console.log(queryString);



        connection.query(queryString, values, function(err, result) {
            if (err) throw err;
            console.log(result);
            a(result)
        });
//     },
//     update1: function(table, column, column2, id) {
//         //UPDATE table1 SET col_a='k1', col_b='foo' WHERE key_col='1';
// // will likely need to build a function with a for loop to handle the comma between ?? below
//         const queryString = "UPDATE ?? SET ??, ??,  WHERE ??";
//         connection.query(queryString, [table, column, column2, id], function(err, result) {
//             if (err) throw err;
//             console.log(result);
//         })
    }
}

// export to model
module.exports = orm;