var rateParent  = null;
var rateDefault = null;

$('.rating--dynamic .svg-icon').on('mouseenter', function() {
    rateParent = $(this).closest('.rating');
    rateParent
        .removeClass('rating--rate-1 rating--rate-2 rating--rate-3 rating--rate-4 rating--rate-5')
        .addClass('rating--rate-' + ($(this).index() + 1));
});

$('.rating--dynamic').on('mouseleave', function() {
    rateParent
        .removeClass('rating--rate-1 rating--rate-2 rating--rate-3 rating--rate-4 rating--rate-5')
        .addClass('rating--rate-' +  rateParent.attr('data-rate'));
});

$('.rating--dynamic .svg-icon').on('click', function() {
    rateParent.attr('data-rate', $(this).index() + 1);
});
