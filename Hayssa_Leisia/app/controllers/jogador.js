//esse é o controller do express

var jogadores = [
	{_id: 1, nome: 'Jogador1'},
	{_id: 2, nome: 'Jogador2'},
	{_id: 3, nome: 'Jogador3'},
	{_id: 4, nome: 'Jogador4'}
];

module.exports = function(){

	var controller = {};

	controller.listaJogadores = function(req, res){
		res.json(jogadores);
	};

	return controller;
};
