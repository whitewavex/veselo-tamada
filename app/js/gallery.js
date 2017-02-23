$(document).ready(function(){
    
    $('.slideFotos').click(function(event){
        event.preventDefault();
        $('.gallery-wrapper').fadeIn('slow');
        slideFotos();
    });
    
    function slideFotos(){
    
        var position = 0;
        var slideWidth = $('#galleryContainer').width();
        var slides = $('.slide');
        var number = slides.length;

        $('#galleryContainer').css({
           'overflow': 'hidden' 
        });
        slides.wrapAll('<div id="galleryInner"></div>').css({
           'float': 'left',
            'width': slideWidth
        });
        $('#galleryInner').css({
           'width': slideWidth * number 
        });
        $('#gallery').prepend('<span class="gallery-control" id="prevFoto"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>');
        $('#gallery').prepend('<span class="gallery-control" id="nextFoto"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>');
        $('#gallery').prepend('<span class="gallery-control" id="closeFoto"><i class="fa fa-times" aria-hidden="true"></i></span>')

        manageControl( position );

        $('.gallery-control').on('click', function(){
            if( $(this).attr('id')=='nextFoto'){
                position = position + 1;
            }
            else if( $(this).attr('id')=='prevFoto'){
                position = position - 1;
            }
            else {
                $('.gallery-wrapper').fadeOut('slow');
                position = 0;
                $('.gallery-control').remove();
            }
            manageControl( position );
            $('#galleryInner').css({
               'margin-left': slideWidth * (-position) 
            });
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