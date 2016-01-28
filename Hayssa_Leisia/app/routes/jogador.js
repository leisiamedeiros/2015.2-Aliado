module.exports = function(app){
	var controller = app.controllers.jogador;

	//nova rota como POST
	app.route('/jogadores')
		.get(controller.listaJogadores);
};
