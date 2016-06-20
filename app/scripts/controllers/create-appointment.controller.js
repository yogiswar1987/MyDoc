'use strict';

angular.module('MyDoctorApp')
  .controller('CreateAppointmentCtrl', ['$scope', '$location', 'moment', function ($scope, $location, moment) {

    $scope.$parent.selectedIndex = 0;
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
    'WY').split(' ').map(function (state) {
      return {abbrev: state};
    });

    var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    vm.calendarView = 'month';
    vm.viewDate = new Date();
    vm.events = [
      {
        title: 'An event',
        type: 'warning',
        startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
        type: 'info',
        startsAt: moment().subtract(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true
      }, {
        title: 'This is a really long event title that occurs on every year',
        type: 'important',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true
      }
    ];

    vm.isCellOpen = true;

    vm.eventClicked = function (event) {
      alert('Clicked', event);
    };

    vm.eventEdited = function (event) {
      alert('Edited', event);
    };

    vm.eventDeleted = function (event) {
      alert('Deleted', event);
    };

    vm.eventTimesChanged = function (event) {
      alert('Dropped or resized', event);
    };

    vm.toggle = function ($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };

  }]);
