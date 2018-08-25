new fullpage('#fullpage', {
    sectionsColor: ['#4286f4'],
    keyboardScrolling: false,
    autoScrolling: false,
    anchors: ['first', 'second']
});
$(function () {
    $('#fullpage').fullpage({});
});
$('#fullpage').fullpage({
    anchors: ['section1', 'section2']
});
