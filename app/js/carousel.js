$(document).ready(function(){
    var auto = 7000;
    var width = $('#carousel-container').width();
    $('.carousel>li').width( width );
    $('.carousel>li>img').width( width );
    $('.carousel').width( width * $('.carousel>li').length );
    $('.carousel').css( 'left', -width );
    $('.carousel>li:last-child').prependTo('.carousel');
    
    function next(){
        clearInterval( interval );
        $('.carousel').animate({
            'margin-left': -width
        }, 1000, function(){
            $('.carousel>li:first-child').appendTo('.carousel');
            $('.carousel').css( 'margin-left', 0 );
            interval = setInterval( next, auto );
        })
    }
    
    function prev(){
        clearInterval( interval );
        $('.carousel').animate({
            'margin-left': width
        }, 1000, function(){
            $('.carousel>li:last-child').prependTo('.carousel');
            $('.carousel').css( 'margin-left', 0 );
            interval = setInterval( next, auto );
        })
    }
    
    $('.nextSlide').click( next );
    $('.prevSlide').click( prev );

    var interval = setInterval( next, auto );

})