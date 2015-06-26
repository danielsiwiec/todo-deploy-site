angular.module('tododeploy', ['ngRoute', 'core'])
	.controller('adminCtrl', AdminCtrl)
	.controller('mainCtrl', MainCtrl)
	.controller('implementationsCtrl', ImplementationsCtrl)
	.factory('implementationsSvc', implementationsSvc)
	.controller('contributingCtrl', ContributingCtrl)
	.config(function($routeProvider) {

		$routeProvider.when('/implementations', {
			templateUrl: '/views/implementations.html',
			controller: 'implementationsCtrl'
		});

		$routeProvider.when('/contributing', {
			templateUrl: '/views/contributing.html',
			controller: 'contributingCtrl'
		})

		$routeProvider.otherwise({
			templateUrl: '/views/main.html',
			controller: 'mainCtrl'
		});

	});


function AdminCtrl($scope, currentSpot) {

	$scope.isActive = isActive;
	$scope.getTitle = getTitle;
	$scope.getActiveMenu = getActiveMenu;

	function isActive(menuId) {
		return currentSpot.getActiveMenu() == menuId;
	}

	function getTitle() {
		return currentSpot.getTitle();
	}

	function getActiveMenu() {
		return currentSpot.getActiveMenu();
	}

}

function MainCtrl() {}

function ImplementationsCtrl($scope, implementationsSvc) {

	$scope.implementations = implementationsSvc.getImplementations();
}

function implementationsSvc() {

	return {
		getImplementations: function() {
			return implementations;
		}
	}
}


function ContributingCtrl() {}
