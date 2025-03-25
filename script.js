$('a[data-section]').on('click', function (event) {
    event.preventDefault();
    
    $('a[data-section]').removeClass('menuAtivo');
    
    $(this).addClass('menuAtivo');
    
    var targetSection = $('#' + $(this).data('section'));
    $('html, body').animate({
        scrollTop: targetSection.offset().top
    }, 500);
});

var alturas = {};
$('.section').each(function () {
    alturas[$(this).prop('id')] = $(this).offset().top;
});

$(window).on('scroll', function () {
    var windowHeight = $(window).height();
    var scrollTop = $(window).scrollTop();

    for (var seccao in alturas) {
        if (scrollTop + windowHeight >= alturas[seccao]) {
            $('.navegacao a').removeClass('menuAtivo');
            
            $('.navegacao a[data-section="' + seccao + '"]').addClass('menuAtivo');
        }
    }
});