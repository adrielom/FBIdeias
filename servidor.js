//Cria uma referência ao mysql - banco de dados
const mysql = require('mysql');
//Cria uma referência ao express - framework que facilita criar servidor
const express = require('express');
//Cria uma instância do servidor
const app = express();

//Observa uma porta
const PORT = 3300 || process.env.PORT;

//Cria uma conexão com o mysql - banco de dados
const con = mysql.createConnection({
  host: "localhost",
  user: "fbadmin",
  password: "fbadmin",
  database: "fbselect",
  });

//Pedindo info ao servidor
app.get ('/info', (req, res) => {
  console.log ('here')
  con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM info", function (err, result, fields) {
        if (err) throw err;
        res.send (result);
        // console.log("res = " + result);
      });
    })
});

//Pedindo admin ao servidor
app.get ('/admin', (req, res) => {
    console.log ('here')
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM admin", function (err, result, fields) {
          if (err) throw err;
          res.send (result);
          // console.log("res = " + result);
        });
      })
});

app.listen (PORT, () => console.log('worked'));