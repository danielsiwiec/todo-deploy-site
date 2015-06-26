angular.module('core', [])
	.factory('currentSpot', currentSpot)
	.directive('activeMenu', activeMenu)
	.directive('menuId', menuId);


function activeMenu(currentSpot) {
	return function(scope, element, attrs) {
		var activeMenuId = attrs["activeMenu"];
		currentSpot.setCurrentSpot(activeMenuId);
	}
}

function menuId(currentSpot) {

	var menuElements = [];

	function setActive(element, menuId) {
		if (currentSpot.getActiveMenu() == menuId) {
			element.addClass('active');
		} else {
			element.removeClass('active');
		}
	}

	return function(scope, element, attrs) {
		var menuId = attrs['menuId'];
		menuElements.push({
			id: menuId,
			node: element
		});

		var watcherFn = function(watchScope) {
			return watchScope.$eval('getActiveMenu()');
		}

		scope.$watch(watcherFn, function(newValue, oldValue) {
			for (var i = 0; i < menuElements.length; i++) {
				var menuElement = menuElements[i];
				setActive(menuElement.node, menuElement.id);
			}
		});

	}
}

function currentSpot() {
	var activeMenuId = '';

	return {
		setCurrentSpot: function(menuId) {
			activeMenuId = menuId;
		},

		getActiveMenu: function() {
			return activeMenuId;
		}
	}
}
