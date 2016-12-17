/**
 * Created by SWF 
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

    //主体部分

    //计算金额

    $.fn.extend({
        count: function () {
            var money = 0;
            var mun = 0;
            $('.option-good').each(function (index) {
                if (!$(this).hasClass('no')) {
                    //计算金额
                    money += parseFloat($('.good-operation-left').eq(index).attr('alt')) * parseInt($('.mun').eq(index).children('input').val());
                    //计算商品个数
                    mun += parseInt($('.mun').eq(index).children('input').val());
                }
            });
            $('.rental-money').text(money);
            $('.clearBtn>small').text(mun);
        }
    });

    //页面刷新,调用一次计算金额
    $($(this)).count();


    //选中按钮
//    $('.option-shop').each(function () {
//        $(this).click(function () {
//            $(this).toggleClass('no');
//            $(this).parent().siblings().children('.option-good').toggleClass('no');
//            $($(this)).count();
//        });
//    });
    $('.option-good').each(function () {
        $(this).click(function () {
            $(this).toggleClass('no');
            $($(this)).count();
            if($('.option-good').hasClass('no')){
                $('.option-all').addClass('no');
            }else{
                $('.option-all').removeClass('no')
            }
        });
    });
    //全选
    $('.option-all').click(function () {
        if(!$(this).hasClass('no')){
            $('.option-good').addClass('no');
            $(this).addClass('no')
        }else{
            $('.option-good').removeClass('no');
            $(this).removeClass('no')
        }


//        $('.option-shop').toggleClass('no');
//            $(this).toggleClass('no');
        $($(this)).count();
    });
    //减
    $('.sub').each(function () {
        $(this).click(function () {
            if (parseInt($(this).siblings('input').val()) > 1){
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