'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope,$http) {
  		$http.get('data/data.json').success(function(data){
  			$scope.data = data;
  		});
  		$scope.shown = 0;
  		$scope.isShown = function($id){
  			return $scope.shown === $id;
  		}
  		$scope.show= function($id){
  			$scope.shown = $id;
  		}
  });
    $(document).ready(function(){
      $('.parallax').parallax();
    });