*global define*/
'use strict';

/**
 * The main controller for the app. The controller:
 * - retrieves and persist the model via the spotkeyStorage service
 * - exposes the model to the template and provides event handlers
 */

define(['app', 'services/spotkeyStorage'], function (app) {
	return app.controller('SpotkeyController', ['$scope', '$location', 'tspotkeyStorage',
		function SpotkeyController($scope, $location, spotkeyStorage) {
			var spotkeys = $scope.spotkeys = spotkeyStorage.get();

			$scope.newSpotkey = '';
			$scope.editedSpotkey = null;

			if ($location.path() === '') {
				$location.path('/');
			}

			$scope.location = $location;


			$scope.addSpotkey = function () {
				var newSpotkey = $scope.newSpotkey.trim();
				if (!newSpotkey.length) {
					return;
				}

				spotkeys.push({
					title: newSpotkey
				});

				$scope.newSpotkey = '';
			};


			$scope.editSpotkey = function (spotkey) {
				$scope.editedSpotkey = spotkey;
			};


			$scope.doneEditing = function (spotkey) {
				$scope.editedSpotkey = null;
				spotkey.title = spotkey.title.trim();

				if (!spotkey.title) {
					$scope.removeSpotkey(spotkey);
				}
			};


			$scope.removeSpotkey = function (spotkey) {
				spotkeys.splice(spotkeys.indexOf(spotkey), 1);
			};
		}
	]);
});