'use strict';

angular.module('MyDoctorApp')
  .controller('AppCtrl', ['$scope', '$location', '$mdSidenav', function ($scope, $location, $mdSidenav) {
    // Sidenav toggle
    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
    // Menu items
    $scope.menu = [
      {
        link: '',
        title: 'Dashboard',
        icon: 'action:ic_dashboard_24px' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
      },
      {
        link: '',
        title: 'Friends',
        icon: 'social:ic_group_24px'
      },
      {
        link: '',
        title: 'Messages',
        icon: 'communication:ic_message_24px'
      }
    ];
    $scope.admin = [
      {
        link: '',
        title: 'Trash',
        icon: 'action:ic_delete_24px'
      },
      {
        link: 'showListBottomSheet($event)',
        title: 'Settings',
        icon: 'action:ic_settings_24px'
      }
    ];

  }]);
