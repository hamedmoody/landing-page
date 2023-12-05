jQuery(document).ready(function($){

    $({ countNum : 0 }).animate({ countNum: 50 }, {
        duration    : 5000, // tune the speed here
        easing      : 'swing',
        step        : function() {
          $('.course-minutes').text(
            ( '+' + ( Math.ceil( this.countNum ) * 4000 ) )
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          );
        },
    });

});