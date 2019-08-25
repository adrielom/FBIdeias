const express = require('express')
const route = express.Router();

//Pedindo info ao servidor
route.get ('/info', (req, res) => {
    console.log ('here')
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM info", function (err, result, fields) {
          if (err) throw err;
          res.send (result);
          console.log("res = " + result);
        });
      })
});