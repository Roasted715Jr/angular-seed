//https://code.tutsplus.com/tutorials/creating-a-web-app-from-scratch-using-angularjs-and-firebase--cms-22391
'use strict';

//Inject the 'ngRoute' module in our application 'myApp'
angular.module('myApp', [
	'ngRoute',
	'myApp.home'
]);
//The 'ngRoute' module has a component called '$routeProvider' which is useful for configuring routes
//Inject '$routeProvider' into the config method of 'angular.module'
config(['$routeProvider', function ($routeProvider) {
	//Routes will be here
	$routeProvider.when('/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}]);