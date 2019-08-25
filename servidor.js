//Cria uma referência ao express - framework que facilita criar servidor
const express = require('express');
//Cria uma instância do servidor
const app = express();
const info = require('./rotas/info')

const bodyParser = require('body-parser')

//Observa uma porta
const PORT = 3300 || process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//Pedindo info ao servidor
app.use('/info', info)

// //Pedindo admin ao servidor
// app.get('/admin', (req, res) => {
// 	console.log('there');
// 	connection.query('SELECT * FROM admin', function(err, result, fields) {
// 		if (err) throw err;
// 		res.send(result);
// 	});
// });


app.listen(PORT, () => console.log('worked'));