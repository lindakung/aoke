'use strict';

/**
 * @ngdoc function
 * @name aokeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the aokeApp
 */
angular.module('aokeApp')
  .controller('MainCtrl', function ($scope, Auth, $location, $q, Ref) {
    $scope.oauthLogin = function(provider, authData) {
    	console.log('authData', authData);
      $scope.err = null;
      Auth.$authWithOAuthPopup(provider, {
      	rememberMe: true, 
      	scope: 'https://www.googleapis.com/auth/youtube'
      })
      .then(redirect, showError);
    };

    function redirect() {
    	$location.path('/create')
    }

     function showError(err) {
      $scope.err = err;
    }
  });
