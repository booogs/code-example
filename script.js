$(window).scroll(function () {
    console.log($(window).scrollTop());
    var topDivHeight = $(".topdiv").height();
    var viewPortSize = $(window).height();

    var triggerAt = 150;
    var triggerHeight = (topDivHeight - viewPortSize) + triggerAt;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.fadethisdiv').css('visibility', 'visible').hide().fadeIn();
        $(this).off('scroll');
    }
});
