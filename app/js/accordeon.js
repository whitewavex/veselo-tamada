$(document).ready(function(){
    $('.set>a').click(accordeon);
    
    function accordeon(event){
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
    }
    
    if( location.hash.indexOf('#') == 0 ) {
        var id = location.hash;
        var time = setTimeout(function(){
          $('' + id + '').trigger('click');
        }, 400);
    }
});