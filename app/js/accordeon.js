$(document).ready(function(){
    $('.set>a').click(function(event){
        event.preventDefault();
        if( $(this).hasClass('active') ){
            $(this).removeClass('active');
            $(this).siblings('.accordeon-content').slideUp(200);
        }
        else {
            $('.set>a').removeClass('active');
            $(this).addClass('active');
            $('.accordeon-content').slideUp(200);
            $(this).siblings('.accordeon-content').slideDown(200);
        }
    })
});