/**
 * IIFE
 */
$(function() {
    $.fn.Cherry_Blossoms=function (params) {
        return this.each(function () {
            //设置默认值
            var defaults={
                ele:'.cherry',//切换对象
                is_Cherry:true,//是否生成樱花
                image_min:10,//花瓣最小宽度和高度
                image_max:50,//花瓣最大宽度和高度
                time_min:10000,//花瓣最快下坠时间
                time_max:20000,//花瓣最慢下坠时间
                interval:500//花瓣生成时间间隔
            };
            //定义默认参数，其中若在html页面设置了param是，这里的params会替换defaults
            var par = $.extend({}, defaults, params);
            /**
             * [m,n]随机数函数
             */
            function randomNum(minNum, maxNum) {
                switch (arguments.length) {
                    case 1:
                        return parseInt(Math.random() * minNum + 1, 10);
                        break;
                    case 2:
                        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                        break;
                    default:
                        return 0;
                        break;
                }
            }

            /**
             * 生成樱花花瓣
             */
            if(par.is_Cherry) {
                setInterval(function () {
                    var time;//下落的持续时间，取随机数
                    var image_daxiao;//花瓣大小取随机数
                    var margin_left;//花瓣所在位置，取随机数
                    margin_left = randomNum(5, 100);
                    time = randomNum(par.time_min, par.time_max);
                    console.log(time);
                    image_daxiao = randomNum(par.image_min, par.image_max);
                    console.log(image_daxiao);
                    $('#yinghua:last-child').after('<img id="yinghua" src="../image/yinghua.png" alt="">');
                    $('#yinghua:last-child').css({
                        'margin-left': margin_left + '%',
                        'width': image_daxiao + 'px',
                        'height': image_daxiao + 'px'
                    });
                    $('#yinghua:last-child').animate({
                            left: -15 + '%',
                            top: 100 + '%',
                            deg: -540
                        },
                        {
                            step: function (deg) {
                                //console.log(deg);
                                $(this).css({"transform": "rotate3d(1,.2,0," + deg + "deg)"});
                            },
                            duration: time
                        }, time);
                    setTimeout(function () {
                        $('#yinghua:first-child').remove();
                    }, time-5000);
                }, par.interval);
            }
        })
    }
});


