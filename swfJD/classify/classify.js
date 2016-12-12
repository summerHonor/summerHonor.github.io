/**
 * Created by SWF on 2016/10/30.
 */
$(function () {
    //搜索框事件及后
    $('.classify-search').click(function () {
        $('.classify-body').hide();
        $('.search-body').show();
    });
    $('.search-back').click(function () {
        $('.classify-body').show();
        $('.topNav').hide();
        $('.search-body').hide();
    });
    $('.search-body .refresh').click(function () {
        //刷新
        $('li>span').each(function () {
            $(this).fadeOut(500, function () {
                $(this).fadeIn(1000);
            });
        });
    });
    $('.search-body li').each(function () {
        //点击
        $(this).click(function () {
            $('input').val($(this).text())
        });
    });

    /*主体页面*/
    //隐藏菜单
    $('.navMenu').click(function () {
        $('.topNav').toggle();
        if ($('.topNav').css('display') == 'block') {
            $('.leftMenu').css('top', '2.5rem');
            $('.rightPage').css('top', '2.5rem');
        } else {
            $('.leftMenu').css('top', '1rem');
            $('.rightPage').css('top', '1rem')
        }
    });

    //左边ta菜单事件
    $('.leftMenu li').each(function (index) {
        $(this).click(function () {
            //
            $(this).css('color', 'red');
            $(this).siblings('.leftMenu li').css('color', 'black');
            $('.leftMenu ul').animate({top: -index + 'rem'}, 500);
            $('.right').eq(index).fadeIn(2000);
            $('.right').eq(index).siblings('.right').hide();
        });
    });
})