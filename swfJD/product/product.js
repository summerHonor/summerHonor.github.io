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

    //外层tab切换
    $('.title li').each(function (index) {
        $(this).click(function () {
            $(this).css('font-weight', '600').css('border-bottom','2px solid black');
            $(this).siblings('.title li').css('font-weight', '100').css('border-bottom','none');;
            $('.main-list').eq(index).show();
            $('.main-list').eq(index).siblings('.main-list').hide();
        });
    });

    //第二层tab切换
    $('.xq-li').each(function (index) {
        $(this).click(function () {
            $(this).css('color', 'red');
            $(this).siblings('.xq-li').css('color', 'grey')
            $('.xq').eq(index).show();
            $('.xq').eq(index).siblings('.xq').hide();
        });
    });
    var imgs = ['image/honor8-blue.jpg','image/honor8-golden.jpg'];
    var t; //保存颜色选项
    //手机选项
    $('.good-choice-color li').each(function (index) {
        $(this).click(function () {
            $('#pic').attr('src',imgs[index]);
            $(this).css('border','1px solid red');
            $(this).siblings('.good-choice-color li').css('border', '1px solid gainsboro');
            t = $(this).text();
        });
    });
    $('.good-choice-versions li').each(function () {
        $(this).click(function () {
            $(this).css('border','1px solid red');
            $(this).siblings('.good-choice-versions li').css('border', '1px solid gainsboro');
            $('.good-txt>p').eq(0).text($(this).text());
            $('.ms+span').text(t+' '+$(this).text());
        });
    });

    //减
    $('.sub').each(function () {
        $(this).click(function () {
            if (parseInt($(this).siblings('input').val()) > 1) {
                $(this).siblings('input').val(parseInt($(this).siblings('input').val()) - 1);
                $($(this)).count();
            }
        });
    });
    //加
    $('.add').each(function () {
        $(this).click(function () {
            $(this).siblings('input').val(parseInt($(this).siblings('input').val()) + 1);
            $($(this)).count();
        });
    });
})