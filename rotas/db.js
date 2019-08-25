//Cria uma referência ao mysql - banco de dados
const mysql = require('mysql');

//Cria uma conexão com o mysql - banco de dados
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'fbadmin',
	password: 'fbadmin',
	database: 'fbselect',
});

connection.connect((err) => {
    if(err) throw err;
    console.log('connected')
  })

module.exports = connection;