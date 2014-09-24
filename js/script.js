$( function() {

	var anniv = new Date( 2014, 1, 15 , 20, 0, 0, 0 ).getTime(); //February 15th, 2014 9:00:00 pm

	for( var i = 1; i < 100; i++ ) {
		var now = new Date().getTime();
		var ms = twoToThe(i) * 24 * 60 * 60 * 1000;
		var next_anniv = new Date( anniv + ms );
		if( ( next_anniv.getTime() - now ) > 0 ) {
			$( "#daysUntil" ).val( new String( daysUntil( next_anniv.getTime() ) ) );
			$( "#minutesUntil" ).val( new String( minutesUntil( next_anniv.getTime() ) ) );
			$( "#hoursUntil" ).val( new String( hoursUntil( next_anniv.getTime() ) ) );
			$( "#counter" ).text( i );
			break;
		}
	}

	function daysUntil( date ) {
		var now = new Date().getTime();
		return ( ( date - now ) / ( 1000 * 60 * 60 * 24 ) ).toFixed( 0 );
	}
	function hoursUntil( date ) {
		var now = new Date().getTime();
		return ( ( date - now ) / ( 10000 * 60 * 60 ) ).toFixed( 0 );
	}
	function minutesUntil( date ) {
		var now = new Date().getTime();
		return ( ( date - now ) / ( 10000 * 60 ) ).toFixed( 0 );
	}
	function twoToThe( power ) {
		return Math.pow( 2, power );
	}

});