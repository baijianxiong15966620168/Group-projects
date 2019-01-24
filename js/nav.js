// 导航栏中间的下拉框特效
var navCenter = $('.nav-center .first-layer>li');
navCenter.mouseenter(function () {
    $(this)
        .children('.hidden-ul')
        .stop()
        .fadeIn(300, 'linear')
    // .slideDown(300);
});
navCenter.mouseleave(function () {
    $(this)
        .children('.hidden-ul')
        .stop()
        .fadeOut(100, 'linear')
    // .slideUp(300);
});
// 导航搜索框显示部分

// 设置鼠标进入事件
$('.nav-search .search-icon').mouseenter(function () {
    $(this)
        .css('color', 'black')
        .prev()
        .css('display', 'block')
        .stop()
        .animate({
            width: 200,
            opacity: 1,
        }, 500)
});
// 设置鼠标离开事件
function fn2() {
    $('.nav-search input')
        .stop()
        .animate({
            width: 0,
            opacity: 0,
        }, 1000)
        .next()
        .css('color', '#fff');
};
$('.nav-search ').mouseleave(fn2); //设置鼠标离开事件
// 获得焦点事件
$('.nav-search input').focus(function () {
    // 触发鼠标进入事件
    $('.nav-search .search-icon')
        .trigger('mouseenter')
    // 关闭鼠标离开事件
    $('.nav-search ')
        .off('mouseleave', fn2);
});
// 失去焦点事件
$('.nav-search input').blur(function () {
    // 设置鼠标离开事件
    $('.nav-search ')
        .on('mouseleave', fn2);
    // 触发鼠标离开事件
    $('.nav-search ')
        .trigger('mouseleave');
});