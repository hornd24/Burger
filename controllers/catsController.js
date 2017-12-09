var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
 
      var hbsObject = {
        burgers: data,
       
      };
      // console.log(hbsObject);
      res.render("index", hbsObject);
  
   
  });
});

router.post("/api/burger", function(req, res) {
  console.log('i am inside the posting bitch')
  burgers.create([
    req.body.burger_name,false
  ], function(result) {
    // Send back the ID of the new quote
    res.json('fuck you' );
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
 
  burgers.updateOne({
    devoured  : req.body.eaten
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
