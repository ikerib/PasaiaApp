// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.albisteak', {
    url: '/albisteak',
    views: {
      'menuContent': {
        templateUrl: 'templates/albisteak.html',
        controller: 'AlbisteakCtrl'
      }
    }
  })

  .state('app.albistea', {
    url: '/albistea/:albistea',
    views: {
      'menuContent': {
        templateUrl: 'templates/albistea.html',
        controller: 'AlbisteaCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.laneskeintzak', {
      url: '/laneskeintzak',
      views: {
        'menuContent': {
          templateUrl: 'templates/laneskeintzak.html',
          controller: 'LaneskeintzakCtrl'
        }
      }
    })

  .state('app.laneskeintza', {
    url: '/laneskeintza/:laneskeintzaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/laneskeintza.html',
        controller: 'LaneskeintzaCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/laneskeintzak');
});
