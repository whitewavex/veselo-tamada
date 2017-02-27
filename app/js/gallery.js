$(document).ready(function(){
    
    $('.works').click(function(event){
        event.preventDefault();
        var target = '.' + $(this).data('target');
        $(target).fadeIn('slow');
        slideFotos(target);
    });
    
    function slideFotos(target){
        var wrap = $(target);
        var position = 0;
        var slideWidth = wrap.find('.galleryContainer').width();
        var slides = wrap.find('.slide');
        var number = slides.length;

        wrap.find('.galleryContainer').css({
           'overflow': 'hidden' 
        });
        slides.wrapAll('<div id="galleryInner"></div>').css({
           'float': 'left',
            'width': slideWidth
        });
        $('#galleryInner').css({
           'width': slideWidth * number 
        });
        wrap.find('.gallery').prepend('<span class="gallery-control" id="prevFoto"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>');
        wrap.find('.gallery').prepend('<span class="gallery-control" id="nextFoto"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>');
        wrap.find('.gallery').prepend('<span class="gallery-control" id="closeFoto"><i class="fa fa-times" aria-hidden="true"></i></span>')

        manageControl( position );

        wrap.find('.gallery-control').on('click', function(){
            if( $(this).attr('id')=='nextFoto'){
                position = position + 1;
                manageControl( position );
                $('#galleryInner').css({
                   'margin-left': slideWidth * (-position) 
                });
            }
            else if( $(this).attr('id')=='prevFoto'){
                position = position - 1;
                manageControl( position );
                $('#galleryInner').css({
                   'margin-left': slideWidth * (-position) 
                });
            }
            else {
                wrap.fadeOut('slow', function(){
                    position = 0;
                    $('.gallery-control').remove();
                    slides.unwrap();
                });
            }
        });

        function manageControl( position ){
            if( position == 0 ){
                $('#prevFoto').hide();
            }
            else {
                $('#prevFoto').show();
            }
            if( position == number - 1 ){
                $('#nextFoto').hide();
            }
            else {
                $('#nextFoto').show();
            }
        }     
    }
});