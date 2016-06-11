'use strict';

angular.module('MyDoctorApp')
  .controller('AppCtrl', ['$scope', '$location', '$mdSidenav', '$rootScope', function ($scope, $location, $mdSidenav, $rootScope) {

    $rootScope.role = sessionStorage.getItem('role');
    // Sidenav toggle
    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
    // Menu items
    $scope.menu = [
      {
        link: 'app/home',
        title: 'Dashboard',
        icon: 'action:ic_dashboard_24px', // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
        rolesAllowed: ['admin']
      },
      {
        link: 'app/appointments/create',
        title: 'Appointments',
        icon: 'social:ic_group_24px',
        rolesAllowed: ['admin', 'user']
      },
      {
        link: 'app/collaboration',
        title: 'Collaboration',
        icon: 'communication:ic_message_24px',
        rolesAllowed: ['admin', 'user']
      }
    ];
    $scope.admin = [
      {
        link: '',
        title: 'Trash',
        icon: 'action:ic_delete_24px',
        rolesAllowed: ['admin', 'user']
      },
      {
        link: 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'action:ic_settings_24px',
        rolesAllowed: ['admin', 'user']
      }
    ];

    $scope.navigate = function (path) {
      $location.path(path);
      console.log(path);
      $mdSidenav('left').close();
    };
  }]);
