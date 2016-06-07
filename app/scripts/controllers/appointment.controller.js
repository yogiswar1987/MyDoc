'use strict';

angular.module('MyDoctorApp')
  .controller('AppointmentCtrl',['$scope','$location', function ($scope,$location) {

    $scope.user = {
      title: 'patient',
      email: 'ipsum@lorem.com',
      firstName: 'yogesh',
      lastName: '',
      address: 'jeevanbima nagar',
      city: 'bangalore',
      state: 'Karnataka',
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it he bouldered up Castle Craig!',
      postalCode: '560075'
    };
    $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
    'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
    'WY').split(' ').map(function(state) {
      return {abbrev: state};
    });
  }]);
