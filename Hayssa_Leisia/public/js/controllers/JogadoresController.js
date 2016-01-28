
angular.module('historia1').controller('JogadoresController',
  function(Jogador, $scope){

    $scope.dado1 = {valor1: ''};
    $scope.dado2 = {valor2: ''};
    $scope.dado3 = {valor3: ''};
    $scope.dado4 = {valor4: ''};
    $scope.dado5 = {valor5: ''};
    $scope.dado6 = {valor6: ''};
    $scope.dado7 = {valor7: ''};
    $scope.dado8 = {valor8: ''};

     $scope.jogardado1 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado1 = {
           valor1: a
         };
     };
     $scope.jogardado2 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado2 = {
           valor2: a
         };
     };
     $scope.jogardado3 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado3 = {
           valor3: a
         };
     };
     $scope.jogardado4 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado4 = {
           valor4: a
         };
     };
     $scope.jogardado5 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado5 = {
           valor5: a
         };
     };
     $scope.jogardado6 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado6 = {
           valor6: a
         };
     };
     $scope.jogardado7 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado7 = {
           valor7: a
         };
     };
     $scope.jogardado8 = function(){
       var a = Math.floor(Math.random()*6)+1;
         $scope.dado8 = {
           valor8: a
         };
     };


    function MostraJogadores(){
      Jogador.query(
        function(jogadores){
          $scope.jogadores = jogadores;
        },
        function(erro){
          console.log(erro);
        }
      );
    }
    MostraJogadores();



  });
