const express = require('express');

const app = express();

app.use(express.json());

// METODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARAMETROS:
// Query Params: req.query (Filtros, Ordenaçao, Paginaçao)
// Routes Params: req.params (Identificar recurso na alteraçao ou remoçao)
// Body: req.body (Dados para criaçao ou alteraçao de registro)

app.post('/users', (req, res) => {
	console.log(req.body);
	return res.json	({ message: 'Olá, Mundo' });
});

app.listen(3333);