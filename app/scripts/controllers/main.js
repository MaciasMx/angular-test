'use strict';

/**
 * @ngdoc function
 * @name angularTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTestApp
 */

angular.module('angularTestApp').controller('MainCtrl', function ($scope) {
	$scope.tareas = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
	$scope.addTarea = function () {
		$scope.tareas.push($scope.tarea);
		$scope.tarea = '';
	};

	$scope.eliminarTarea = function (index) {
		$scope.tareas.splice(index,1);
	};
});
