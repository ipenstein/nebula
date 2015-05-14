$( document ).ready ( function () {

    //Tabs
    $( '.tabs-container' ).each ( function () {
        var u = this ;

     // Wenn es den Inhalt nicht gibt - wird der Tab entfernt
     // au?rdem: href nach rel
        $( ".tabs li" , u ).each ( function () {
            var link = $( this ).find( "a" );
            var haref = link.attr( 'href' );

            if ( $( $( this ).find( "a" ).attr( "href" ) ).size() === 0 ) {
        //  if ( link.attr( "href" ) == 0 ) { --> Ist doch quatsch ... da werden nur Tabs ohne href entfernt und nicht Tabs ohne Ziel ...
                $( this ).remove () ;
            }

            link.attr( 'rel' , haref );
            link.attr( 'href' , null );
        } ) ;

        $( ".tabs li" , u ).click ( function () {
            $( ".tabs li" , u ).removeClass ( "active" ) ;
            $( this ).addClass ( "active" ) ;
            $( ".tab-content" , u ).hide () ;

            var rel = $( this ).find( "a" ).attr( "rel" );
            $( $( this ).find( "a" ).attr( "rel" ) ).fadeIn () ;
            self.document.location.hash = 'panel-' + rel.replace('#', '');
    //          return false ;
        } ) ;

        $( ".tab-content" , u ).hide () ;

        if ( self.document.location.hash ) {
            var h = self.document.location.hash.replace('panel-', '');
            var el = $( 'a[rel=' + h + ']', u );

            if (el.length) {
                $( el ).parent().click () ;
            } else {
                $( ".tabs li:first" , u ).click () ;
            }
        } else {
            $( ".tabs li:first" , u ).click () ;
        }
    });
});