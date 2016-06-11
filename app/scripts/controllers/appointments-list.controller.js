'use strict';

angular.module('MyDoctorApp')
  .controller('AppointmentsListCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.$parent.selectedIndex = 1;
    $scope.items = [1, 2, 3, 4, 5];
  }]);
