'use strict';


angular.module('MyDoctorApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ngMessages',
    'ngMaterial'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
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
  });




