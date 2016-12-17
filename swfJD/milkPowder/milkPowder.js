/**
 * Created by SWF 
 */

$(function () {
    //隐藏菜单
    $('.navMenu').click(function () {
        $('.topNav').toggle();
        if ($('.topNav').css('display') == 'block') {
            $('main').css('margin-top', '2.5rem');
            $('.brand-box').css('top', '4.5rem');
        } else {
            $('main').css('margin-top', '1rem');
            $('.brand-box').css('top', '3rem');
        }
    });

    //
    $('.drop-down').each(function (index) {
        $(this).click(function () {
            $('body').css('overflow', 'hidden');
            $('.brand-box').eq(index).toggle();
            $('.brand-box').eq(index).siblings('.brand-box').hide();
            $(this).children('span').toggleClass('triangleDown').toggleClass('triangleUp');
            $(this).siblings('.drop-down').children('span').removeClass('triangleUp').addClass('triangleDown');
        });
    });


});