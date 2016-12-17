/**
 * Created by SWF 
 */

$(function () {
    //把所有的输入框初值为空
    $('.box>input').each(function () {
        $(this).val('');
    });
    //判断每个输入框不为空
    $.fn.extend({
        judge: function () {
            var bool = false;
            $('input').each(function () {
                if ($(this).val() != '') {
                    bool = true;
                } else {
                    bool = false;
                    return bool;
                }
            });
            return bool;
        }
    });
    //改变提交按钮背景
    $.fn.extend({
        chageButton: function () {
            if ($($(this)).judge() == true) {
                $('.btn').removeAttr('disabled').css('background-color', 'red').css('color', 'white');

            } else {
                $('.btn').attr('disabled', 'disabled').css('background-color', 'rgba(220, 220, 220, 0.3)').css('color', 'black');
            }
        }
    });
    //
    $('.box>input').each(function (index) {
        //输入框获取焦点是显示删除按钮
        $(this).focus(function () {
            $('.tel-num-del').eq(index).show();
            $('.box').eq(index).siblings('.box').children('.tel-num-del').hide();
        });
        //输入内容为空
        $(this).bind('input', function () {
            if ($(this).val() == '') {
                $('.tel-num-del').hide();
            }
        });
    });
    //点击删除按钮
    $('.tel-num-del').each(function (index) {
        $(this).click(function () {
            $('.box').eq(index).children('input').val('');
            $(this).hide();
        });
    });

    //输入手机号码,获取短信验证码  input
    $('.tel-num').bind('input', function () {
        if ($(this).val() != '') {
            $(this).css('color', 'black');
        }
        $($(this)).chageButton();
    });


    //密码显示与隐藏
    $('.paw-switch').click(function () {
        //当为密码的类型
        if ($('#paw').attr('type') == 'password') {
            $('#paw').attr('type', 'text');
            $(this).css('background-color', 'red');
            $('.paw-switch-ball+small').text('ABC').css({
                'color': 'white',
                'font-size': '0.3rem',
                'top': '0.1rem',
                'right': '0.5rem'
            });
            $('.paw-switch-ball').css({'left': '0.6rem'});

        } else if ($('#paw').attr('type') == 'text') {
            $('#paw').attr('type', 'password');
            $(this).css('background-color', 'white');
            $('.paw-switch-ball').css({'left': '0'});
            $('.paw-switch-ball+small').text('...').css({
                'color': 'gray',
                'font-size': '0.5rem',
                'top': '-0.06rem',
                'right': '0.1rem'
            });
        }
    });
    //密码输入
    $('#paw').bind('input', function () {
        //调用 chageButton函数
        $($(this)).chageButton();
    });

    /*验证码实现*/
    //生成26大写字母
    var letters = new Array(26);
    for (var i = 0; i < letters.length; i++) {
        letters[i] = String.fromCharCode(i + 65);
    }
    //随机位置插入20个数字
    for (var k = 0; k < 10; k++) {
        var n = Math.floor(Math.random() * letters.length);
        letters.splice(n, 0, k);
    }
    //随机验证码背景
    var codeBG = ['image/verificationCode-bg.png',
        'image/verificationCode-bg2.png',
        'image/verificationCode-bg3.png'];
    //生成随机验证码
    $.fn.extend({
        verificationCode: function () {
            $('.box-span').text('');
            var a = Math.floor(Math.random()*(codeBG.length));
            $('.box-span').css('backgroundImage','url('+codeBG[a]+')');
            var muns = new Array(4);
            for (var i = 0; i < muns.length; i++) {
                muns[i] = Math.floor(Math.random() * (letters.length));
                $('.box-span').text($('.box-span').text() + letters[muns[i]]);
            }
        }
    });

    //调用随机验证码
    $($(this)).verificationCode();

    //点击调用生产验证码
    $('.box-span').click(function () {
        $($(this)).verificationCode();
    });

    //验证码输入
    $('.box-input').bind('input', function () {
        //小写字母转为大写
        $(this).val($(this).val().toUpperCase());
        //调用 chageButton函数
        $($(this)).chageButton();
    });

    //提交判断
    $('.btn').click(function () {
        //验证码判断
        if ($('.box-input').val() == $('.box-span').text()) {
            $('.hint').text('ok').css('display', 'none');
            $('.box-input').css('border', '0');
        } else {
            $('.hint').text('验证码错误，请重试').css('display', 'block');
            $('.box-input').css('border', '1px solid red');
            $($(this)).verificationCode();
        }
    });

    //登录帮助--免登录

    $('.dismiss').click(function () {
        $(this).toggleClass('dismiss2')
    });
    $('.dismiss-l').click(function () {
        $('.dismiss').toggleClass('dismiss2')
    });


})