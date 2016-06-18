'use strict';

angular.module('starter.controllers', ['ngCordova'])

.controller('AppCtrl', function($scope) {

})

.controller('LandingCtrl', function($scope) {

})

.controller('SearchCtrl', function($scope, $timeout, MovieDb, ionicMaterialMotion) {

  $scope.nosearch = true;
  $scope.currentPage = 0;
  $scope.pageSize = 10;
  $scope.numberOfPages=function(){
        return Math.ceil($scope.moviedetails.totalResults/$scope.pageSize);                
    };

    $scope.$watch('moviefinder.movietitle', function(newValue) {
      $scope.currentPage = 0;
      MovieDb.getMovies(newValue)
        .success(function(data) {
          $scope.moviedetails = data;
        });
    });

    $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
            $scope.currentPage--;
            MovieDb.getMovies($scope.moviefinder.movietitle,$scope.currentPage+1).success(function(data){
              $scope.moviedetails = data;
            });
        }
    };
    
    $scope.nextPage = function () {
        if ($scope.currentPage < $scope.moviedetails.totalResults - 1) {
            $scope.currentPage++;
            MovieDb.getMovies($scope.moviefinder.movietitle,$scope.currentPage+1).success(function(data){
              $scope.moviedetails = data;
            });
        }
    };

  $scope.moviefinder = {movietitle : ""};

  $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
      $scope.nosearch = false;
    };

    $scope.change = function() {
      $scope.nosearch = false;
      if ($scope.moviefinder.movietitle == "") {
        $scope.nosearch = true;
      }
    };

  // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);
})

.controller('OpenMovieCtrl', function($scope, $stateParams, $http) {

    $http.get("http://www.omdbapi.com/?t=" + $stateParams.movieTitle + "&plot=full")
        .success(function(data) {
          $scope.details = data;
        });
});



