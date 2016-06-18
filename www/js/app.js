// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-material', 'ionMdInput', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/mainview.html',
        controller: 'AppCtrl'
    })

    .state('app.landing', {
      url: '/landing',
      views: {
        'mainContent': {
            templateUrl: 'templates/landing-page.html',
            controller: 'LandingCtrl'
        }
      }
    })

    .state('app.searchmovie', {
      url: '/searchmovie',
      views: {
        'mainContent': {
            templateUrl: 'templates/searchmovie.html',
            controller: 'SearchCtrl'
          }
      }
    })

    .state('app.openmovie', {
      url: '/moviedetails/ :movieTitle',
      views: {
        'mainContent': {
            templateUrl: 'templates/openmoviedetails.html',
            controller: 'OpenMovieCtrl'
          }
      }
    })
;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/searchmovie');
});