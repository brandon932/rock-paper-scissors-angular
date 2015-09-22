// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
   
   $scope.win = 0;
   $scope.lose = 0;
   $scope.message = "";
   

   $scope.computer = function() {
   	var symbols = ["rock", "paper", "scissors"];
   	var randomNumber = Math.floor(Math.random() * symbols.length);
   	$scope.computerChoice = symbols[randomNumber];
   };


   $scope.howToWin = function(choice) {
   	var usersChoice = choice;
   	$scope.choice = choice;
   	$scope.computer();
   	$scope.computer();
   	if (usersChoice === $scope.computerChoice) {
   		$scope.message = "You tied!";
   		return;
   	} else if (usersChoice === "rock" && $scope.computerChoice === "paper") {
   		$scope.win += 1;
   		$scope.message = "You won!!";
   	} else if (usersChoice === "scissors" && $scope.computerChoice === "paper") {
   		$scope.win += 1;
   		$scope.message = "You won!!";
   	} else if (usersChoice === "paper" && $scope.computerChoice === "rock") {
   		$scope.win += 1;
   		$scope.message = "You won!!";
   	} else {
   		$scope.lose += 1;
   		$scope.message = "Computer won!!";
   	} 
   };


   $scope.reset = function() {
   	console.log("test");
   	$scope.win = 0,
   	$scope.lose = 0
   	$scope.choice = "",
   	$scope.computerChoice = "",
   	$scope.message = ""
   };

});
