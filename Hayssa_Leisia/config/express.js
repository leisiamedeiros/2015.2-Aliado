//config express.js
var load = require('express-load');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();

	//configuracao de ambiente
	app.set('port', 3000);

	//middleware
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views','./app/views');
	//novos middlewares
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	//carregamento de rotas
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
};