var connection = require("../config/connection.js");

var orm = {

    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (burger_name, cb) {
        var queryString = "INSERT INTO" + burger_name;
        connection.query(queryString, [burger_name], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE" + table;
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;