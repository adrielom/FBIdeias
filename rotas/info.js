const express = require('express')
const route = express.Router();
const connection = require('./db')


//Pedindo info ao servidor
route.get('/', (req, res) => {
  if(connection.connection) console.log('is connected')
  connection.query('SELECT * FROM info', function(err, result, fields) {
		if (err) throw err;
		res.json(result);
	});
});

route.post('/', (req, res) => {
  const {telefone, email, nome } = req.body;
	connection.query(`INSERT INTO info (telefone, email, nome) VALUES (${telefone}, '${email}', '${nome}')`, function(err, result, fields) {
		if (err) throw err;
		res.json(result);
	});
});

route.put('/:id', (req, res) => {
  const {telefone, email, nome } = req.body;


	connection.query(`INSERT INTO info (Telefone, E-mail, Nome) VALUES (${telefone}, '${email}',' ${nome}')`, function(err, result, fields) {
		if (err) throw err;
		res.json(result);
	});
});

route.delete('/:id', (req, res) => {
  console.log('here')
  const id = req.params.id;
  console.log(id)

	connection.query(`DELETE FROM info WHERE id=${id}`, function(err, result, fields) {
		if (err) throw err;
		res.json(result);
	});
});

module.exports = route;