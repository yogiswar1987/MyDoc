'use strict';


angular.module('MyDoctorApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMessages',
    'ngMaterial',
    'nvd3',
    'ngMdIcons'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $mdIconProvider) {
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $urlRouterProvider
      .otherwise('/auth/login');
    $stateProvider
      .state('app', {
        url: "/app",
        templateUrl: "views/app.html",
        controller: "AppCtrl"
      }).state('app.home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller: "HomeCtrl"
    }).state('app.appointment', {
        url: "/appointment",
        templateUrl: "views/appointment.html",
        controller: "AppointmentCtrl"
      })

      //Authentication Pages
      .state('auth', {
        "abstract": true,
        url: "/auth",
        templateUrl: "views/auth.html"
      })
      .state('auth.login', {
        url: "/login",
        templateUrl: "views/login.html",
        controller: "LoginCtrl"
      });

    $mdIconProvider
    // linking to https://github.com/google/material-design-icons/tree/master/sprites/svg-sprite
    //
      .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
      .iconSet('alert', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-alert.svg', 24)
      .iconSet('av', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-av.svg', 24)
      .iconSet('communication', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-communication.svg', 24)
      .iconSet('content', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-content.svg', 24)
      .iconSet('device', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-device.svg', 24)
      .iconSet('editor', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-editor.svg', 24)
      .iconSet('file', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-file.svg', 24)
      .iconSet('hardware', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
      .iconSet('image', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-image.svg', 24)
      .iconSet('maps', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-maps.svg', 24)
      .iconSet('navigation', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
      .iconSet('notification', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-notification.svg', 24)
      .iconSet('social', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .iconSet('toggle', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-toggle.svg', 24)

      // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
      .iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
      .defaultIconSet('https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24);

  });




