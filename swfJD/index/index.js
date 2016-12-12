/**
 * Created by SWF on 2016/10/30.
 */
$(function () {
    //广告  导航条
    var bool = true;
    $('.close').click(function () {
        $('.ad').hide();
        bool = false;
    });
    $(this).scroll(function () {
        if ($(this).scrollTop() > 60) {
//                $('#nav').css('top','0');
            $('#nav').hide();
            $('#topNav').show();
            $('.toTop').show();
            if ($(this).scrollTop() > 55 + $('.carousel-inner').height()) {
                $('#topNav').css('background-color', 'red').css('opacity', 0.5);
            } else {
                $('#topNav').css('background-color', '0');
                $('#nav').css('background-color', '0');
            }
        } else {
            $('#topNav').css('background-color', 'rgba(255,0,0,0.1)');
            $('#nav').css('background-color', 'rgba(255,0,0,0.1)');

            $('#topNav').hide();
            $('#nav').show();

            $('.toTop').hide();
        }
    });

    //快报
    setInterval(function () {
        $('.bulletin-news').animate({
            marginTop: "-0.5rem"
        }, 500, function () {
            $(this).css({marginTop: "0px"}).find(".bulletin-item:first").appendTo(this);
        });
    }, 2000);

    //秒杀
    setInterval(function () {
        $('.secKill-second').text(parseInt($('.secKill-second').text()) - 1);
        var sec = $('.secKill-second').text() < 10 ? '0' + $('.secKill-second').text() : $('.secKill-second').text();
        $('.secKill-second').text(sec);
        if ($('.secKill-second').text() == '0-1') {
            $('.secKill-second').text(59);
            //
            $('.secKill-minute').text(parseInt($('.secKill-minute').text()) - 1);
            var min = $('.secKill-minute').text() < 10 ? '0' + $('.secKill-minute').text() : $('.secKill-minute').text();
            $('.secKill-minute').text(min);
            if ($('.secKill-minute').text() == '00') {
                $('.secKill-minute').text(59);
                //
                $('.secKill-hour').text(parseInt($('.secKill-hour').text()) - 1);
                var hour = $('.secKill-hour').text() > 10 ? $('.secKill-hour').text() : '0' + $('.secKill-hour').text();
                $('.secKill-hour').text(hour);
                if ($('.secKill-hour').text == '00') {
                    $('.secKill-hour').text('02')
                }
            }
        }
    }, 1000);
})