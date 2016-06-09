'use strict';

angular.module('MyDoctorApp')
  .controller('LoginCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.login = function (loginFrom) {
      if (loginFrom.$valid) {
        $location.url('/app/home');
      }
    };
  }]);
