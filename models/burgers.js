var orm = require("../config/orm.js");


var burgers = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(vals, cb) {
        console.log('i aM BEFORE COLS')
        
            console.log(vals);
            console.log('I AM AFTER COLS')
      orm.create('burgers', vals, function(res) {
        cb(res);
        
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

  module.exports=burgers;