var app = angular.module('CountdownApp');

app.directive('countdown', function() {
  return {
    restrict: 'E',
    controller: 'TickTockController',
    templateUrl: '../../pages/_countdown.html'
  }
});