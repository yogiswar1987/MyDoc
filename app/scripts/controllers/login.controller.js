'use strict';

angular.module('MyDoctorApp')
  .controller('LoginCtrl', ['$scope', '$location', '$rootScope', function ($scope, $location, $rootScope) {
    $scope.login = function (loginFrom) {
      if (loginFrom.$valid) {
        if ($scope.username === 'ravikiran@gmail.com') {
          $rootScope.role = 'admin';
        }
        else {
          $rootScope.role = 'user';
        }
        sessionStorage.setItem('role', $rootScope.role);
        if ($rootScope.role === 'admin') {
          $location.url('/app/home');
        }
        if ($rootScope.role === 'user') {
          $location.url('/app/appointments');
        }
      }
    };
  }]);
