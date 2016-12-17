/**
 * Created by 
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
    /*验证码实现*/
    //生成26大写字母
    var letters = new Array(26);
    for (var i = 0; i < letters.length; i++) {
        letters[i] = String.fromCharCode(i + 65);
    }
    //随机位置插入10个数字
    for (var k = 0; k < 10; k++) {
        var n = Math.floor(Math.random() * letters.length);
        letters.splice(n, 0, k);
    }
    //随机验证码背景
    var codeBG = ['image/verificationCode-bg.png',
        'image/verificationCode-bg2.png',
        'image/verificationCode-bg3.png'];
    //生成随机验证码的函数
    $.fn.extend({
        verificationCode: function () {
            $('.box-span').text('');
            var muns = new Array(4);
            var a = Math.floor(Math.random() * (codeBG.length));
            $('.box-span').css('backgroundImage', 'url(' + codeBG[a] + ')');
            for (var i = 0; i < muns.length; i++) {
                muns[i] = Math.floor(Math.random() * (letters.length - 1));
                $('.box-span').text($('.box-span').text() + letters[muns[i]]);
            }
        }
    });

    //调用随机验证码
    $($(this)).verificationCode();

    //随机验证码
    $('.box-span').click(function () {
        $($(this)).verificationCode();
        console.log(letters.length);
    });
    //验证码输入
    $('.box-input').bind('input', function () {
        //小写字母转为大写
        $(this).val($(this).val().toUpperCase());
        //调用 chageButton函数
        $($(this)).chageButton();
    });

    //
    $('.box>input').each(function (index) {
        //输入框获取焦点是显示删除按钮
        $(this).focus(function () {
            $('.del').eq(index).show();
            $('.box').eq(index).siblings('.box').children('.del').hide();
        });
        //输入内容为空
        $(this).bind('input', function () {
            if ($(this).val() == '') {
                $('.del').hide();
            }
        });
    });
    //点击删除按钮
    $('.del').each(function (index) {
        $(this).click(function () {
            $('.box').eq(index).children('input').val('');
            $(this).hide();
        });
    });

    //输入手机号码,获取短信验证码  input propertyChange(不用) 兼容性
    $('.tel-num').bind('input', function () {
        if ($(this).val() != '') {
            $('.tel-code').css('color', 'red').css('border', '1px solid red');
            $(this).css('color', 'black');
        } else {
            $('.tel-code').css('color', 'gray').css('border', 'none');
        }
        //调用 chageButton函数
        $($(this)).chageButton();
    });
    //
    $('#TD').click(function () {
        $('.tel-code').css('color', 'gray').css('border', 'none');
    });


    //输入短信验证码
    $('#tel-auth-code').bind('input', function () {
        if ($(this).val() != '') {
            $(this).css('color', 'black');
        } else {
            $('#auth-code-del').css('display', 'none');
        }
        //调用 chageButton函数
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
        $($(this)).chageButton();
    });

    //提交判断
    $('.btn').click(function () {
        //手机号码判断
        //手机号不为空，并且是以13、14...19开头的11位数字
        if ($('.tel-num').val() && (/^1[3-9]\d{9}$/).test($('.tel-num').val())) {
            $('.hint').text('ok').css('display', 'none');
            $('.tel-num').css('border', '1px solid gray');
            //密码判断
            //密码为6-20位数字或字母组合
            if ($('#paw').val().length < 20 && $('#paw').val().length > 6 && (/^[A-Za-z0-9]+$/).test($('#paw').val())) {
                $('.hint').text('ok').css('display', 'none');
                $('#paw').css('border', '1px solid gray');
                //验证码判断
                if ($('.box-input').val() == $('.box-span').text()) {
                    $('.hint').text('ok').css('display', 'none');
                    $('.box-input').css('border', '0');
                } else {
                    $('.hint').text('验证码错误').css('display', 'block');
                    $('.box-input').css('border', '1px solid red');
                    $($(this)).verificationCode();
                }
            } else {
                $('.hint').text('请将密码设置为6-20位数字或字母组合').css('display', 'block');
                $('#paw').css('border', '1px solid red');
            }
        } else {
            $('.hint').text('手机号码格式不对').css('display', 'block');
            $('.tel-num').css('border', '1px solid red');
        }

    });
})