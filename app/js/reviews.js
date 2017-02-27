$(document).ready(function(){
    var widthRev = $('#reviews-container').width();
    $('.reviews>li').width( widthRev );
    $('.reviews').width( widthRev * $('.reviews>li').length );
    $('.reviews').css( 'left', -widthRev );
    $('.reviews>li:last-child').prependTo('.reviews');
    
    function nextReview(){
        $('.reviews').animate({
            'margin-left': -widthRev
        }, 1000, function(){
            $('.reviews>li:first-child').appendTo('.reviews');
            $('.reviews').css( 'margin-left', 0 );
        })
    }
    
    function prevReview(){
        $('.reviews').animate({
            'margin-left': widthRev
        }, 1000, function(){
            $('.reviews>li:last-child').prependTo('.reviews');
            $('.reviews').css( 'margin-left', 0 );
        })
    }
    
    $('.nextReview').click( nextReview );
    $('.prevReview').click( prevReview );
});