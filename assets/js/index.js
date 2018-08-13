new fullpage('#fullpage', {
    sectionsColor: [
        'yellow', 'orange', '#C0C0C0', '#ADD8E6'
    ],
    keyboardScrolling: false,
    autoScrolling: false,
    anchors: ['first', 'second']
});
$(function () {
    $('#fullpage').fullpage({});

    $
        .fn
        .fullpage
        .setMouseWheelScrolling(false);
    $
        .fn
        .fullpage
        .setAllowScrolling(false);
});