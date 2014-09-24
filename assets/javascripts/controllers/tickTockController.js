var app = angular.module('CountdownApp');

app.controller('TickTockController', ['$scope', '$interval', function($scope, $interval) {

  var anniv = new Date( 2014, 1, 15 , 20, 0, 0, 0 ).getTime(); //February 15th, 2014 9:00:00 pm

  $scope.numberOfAnniversary;
  $scope.dateOfNextAnniversary;

  $interval(updateTimer, 1000);

  $scope.$watch('seconds', function(val) {
    if (val === 0) {
      init();
    }
  })

  function init() {
    var nextAnniversary = getAnniversary();
    $scope.numberOfAnniversary = nextAnniversary.number;
    $scope.dateOfNextAnniversary = nextAnniversary.date;
    updateTimer();
  }

  function updateTimer() {
    $scope.seconds = secondsUntil( $scope.dateOfNextAnniversary.getTime() );
    $scope.minutes = minutesUntil( $scope.dateOfNextAnniversary.getTime() );
    $scope.hours = hoursUntil( $scope.dateOfNextAnniversary.getTime() );
    $scope.days = daysUntil( $scope.dateOfNextAnniversary.getTime() );
    $scope.now = new Date().getTime();
  }

  function getAnniversary() {
    for( var i = 1; i < Infinity; i++ ) {
      var now = new Date().getTime();
      var ms = twoToThe(i) * 24 * 60 * 60 * 1000;
      var nextAnniversary = new Date( anniv + ms );
      if( ( nextAnniversary.getTime() - now ) > 0 ) {
        return {
          number: i,
          date: nextAnniversary
        };
      }
    }
  }

  function secondsUntil( date ) {
    var now = new Date().getTime();
    return ( ( date - now ) / ( 1000 ) ).toFixed( 0 );
  }

  function daysUntil( date ) {
    var now = new Date().getTime();
    return ( ( date - now ) / ( 1000 * 60 * 60 * 24 ) ).toFixed( 0 );
  }

  function hoursUntil( date ) {
    var now = new Date().getTime();
    return ( ( date - now ) / ( 1000 * 60 * 60 ) ).toFixed( 0 );
  }

  function minutesUntil( date ) {
    var now = new Date().getTime();
    return ( ( date - now ) / ( 1000 * 60 ) ).toFixed( 0 );
  }

  function twoToThe( power ) {
    return Math.pow( 2, power );
  }

  init();

}]);