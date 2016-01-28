
angular.module('historia1').factory('Jogador',
  function($resource){
    return $resource('/jogadores');
  }
);
