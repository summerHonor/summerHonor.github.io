/**
 * Created by SWF on 2016/10/30.
 */

$(function () {
    //隐藏菜单
    $('.navMenu').click(function () {
        $('.topNav').toggle();
        if ($('.topNav').css('display') == 'block') {
            $('main').css('marginTop', '2.5rem');
        } else {
            $('main').css('marginTop', '1rem');
        }
    });
    $('progress').animate({value: '50%'}, 1000);
    //Tab切换
    $('header>ul>li').each(function (index) {
        $(this).click(function () {
            if(index == 0) {
                $('progress').attr('value','0');
                $('progress').animate({value: '50%'}, 1000);
            }
            $('.secKill-good').eq(index).show();
            $('.secKill-good').eq(index).siblings('.secKill-good').hide();

            $(".header-li").eq(index).children('p').css('color','red');
            $(".header-li").eq(index).children('.time').css('font-size','0.45rem');

            $(".header-li").eq(index).siblings(".header-li").children('p').css('color','black');
            $(".header-li").eq(index).siblings(".header-li").children('.time').css('font-size','0.4rem');
        });
    });
})