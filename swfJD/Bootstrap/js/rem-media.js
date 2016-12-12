/**
 * Created by SWF on 2016/10/22.
 */

$(function () {
    //  rem单位响应式
    function fullwidth() {
        if ($('body').width() >= 720) {
            $('html').css('font-size', 100 + 'px');
            // return;
        }else {
            var scale = $('body').width() / 720;
            $('html').css('font-size', scale * 100 + 'px');
        }
    }
    fullwidth();
    $(window).resize(function () {
        fullwidth();
    })
});