/*global spotkeymvc, angular */
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persists the model via the spotkeyStorage service
 * - exposes the model to the template and provides event handlers
 */
spotkeymvc.controller('SpotkeyCtrl', function SpotkeyCtrl($scope, $location, spotkeyStorage) {
	var spotkeys = $scope.spotkeys = spotkeyStorage.get();

	$scope.newSpotkey = '';
	$scope.editedSpotkey = null;

	if ($location.path() === '') {
		$location.path('/');
	}

	$scope.location = $location;

	$scope.addSpotkey = function () {
		var newSpotkey = $scope.newSpotkey.trim();
		if (newSpotkey.length === 0) {
			return;
		}

		spotkeys.push({
			title: newSpotkey,
			completed: false
		});
		spotkeyStorage.put(spotkeys);

		$scope.newSpotkey = ''
	};

	$scope.editSpotkey = function (spotkey) {
		$scope.editedSpotkey = spotkey;
		// Clone the original spotkey to restore it on demand.
		$scope.originalSpotkey = angular.extend({}, spotkey);
	};

	$scope.doneEditing = function (spotkey) {
		$scope.editedSpotkey = null;
		spotkey.title = spotkey.title.trim();

		if (!spotkey.title) {
			$scope.removeSpotkey(spotkey);
		}

		spotkeyStorage.put(spotkeys);
	};

	$scope.revertEditing = function (spotkey) {
		spotkeys[spotkeys.indexOf(spotkey)] = $scope.originalSpotkey;
		$scope.doneEditing($scope.originalSpotkey);
	};

	$scope.removeSpotkey = function (spotkey) {
		$scope.remainingCount -= spotkey.completed ? 0 : 1;
		spotkeys.splice(spotkeys.indexOf(spotkey), 1);
		spotkeyStorage.put(spotkeys);
	};
});