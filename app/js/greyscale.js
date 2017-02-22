$(document).ready(function(){
    var agent = navigator.userAgent;
    var trident = agent.indexOf( 'Trident' );
    var safari = agent.indexOf( '/5.1.4 Safari/' );
    if( trident != -1 || safari != -1 ){
        $('.advice img').remove();
        $('.advice').prepend('<div></div>');
        $('.advice div').addClass('img-bg');
        $('.first div').addClass('married');
        $('.two div').addClass('glasses');
        $('.three div').addClass('happy');
    
        $('.married').on('mouseenter', function(){
           $(this).addClass('married-color');
        });
        $('.glasses').on('mouseenter', function(){
            $(this).addClass('glasses-color');
        });
        $('.happy').on('mouseenter', function(){
            $(this).addClass('happy-color');
        });
    
        $('.married').on('mouseleave', function(){
           $(this).removeClass('married-color');
        });
        $('.glasses').on('mouseleave', function(){
            $(this).removeClass('glasses-color');
        });
        $('.happy').on('mouseleave', function(){
            $(this).removeClass('happy-color');
        });
    }
});