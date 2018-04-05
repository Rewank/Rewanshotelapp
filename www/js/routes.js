angular.module('app.routes', [])

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider


      .state('tabsController.getARoom', {
        url: '/rooms',
        views: {
          'tab1': {
            templateUrl: 'templates/getARoom.html',
            controller: 'getARoomCtrl'
          }
        }
      })

      .state('tabsController.viewRoom', {
        url: '/room/:roomID',
        views: {
          'tab1': {
            templateUrl: 'templates/viewRoom.html',
            controller: 'getARoomCtrl'
          }
        }
      })

      .state('tabsController', {
        url: '/GaR',
        templateUrl: 'templates/tabsController.html',
        abstract: true
      })

    

      .state('start', {
        url: '/start',
        templateUrl: 'templates/start.html',
        controller: 'startCtrl'
      })


      .state('confirmation', {
        url: '/confirmation/:roomID',
        templateUrl: 'templates/confirmation.html',
        controller: 'confirmationCtrl'
      })

    $urlRouterProvider.otherwise('/start')

  });