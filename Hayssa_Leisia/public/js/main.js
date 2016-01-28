// public/js/main.js

angular.module('historia1', ['ngRoute', 'ngResource']).config(function($routeProvider){
  $routeProvider.otherwise({redirectTo: '/jogadores'});

  $routeProvider.when('/jogadores', {
    templateUrl: 'partials/jogadores.html',
    controller: 'JogadoresController'
  });
});
