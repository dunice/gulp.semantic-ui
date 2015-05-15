function init() {
    $('.dropdown').dropdown({
        transition: 'slide'
    });

    $('.message .close').on('click', function() {
        $(this).closest('.row').fadeOut();
    });
}

init();
