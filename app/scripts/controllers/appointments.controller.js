'use strict';

angular.module('MyDoctorApp')
  .controller('AppointmentsCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.selectedIndex = 0;

    $scope.$watch('selectedIndex', function(current, old) {
      switch (current) {
        case 0:
          $location.url("app/appointments/create");
          break;
        case 1:
          $location.url("app/appointments/list");
          break;

      }
    });
  }]);
