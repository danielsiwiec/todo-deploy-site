angular.module('tododeploy', ['ngRoute','core'])
	.controller('adminCtrl', AdminCtrl)
	.controller('mainCtrl', MainCtrl)
	.controller('implementationsCtrl', ImplementationsCtrl)
	.config(function($routeProvider) {

		$routeProvider.when('/implementations', {
			templateUrl: '/views/implementations.html',
			controller: 'implementationsCtrl'
		});

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

function ImplementationsCtrl() {}
