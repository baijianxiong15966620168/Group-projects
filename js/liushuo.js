// 找到li 侧边栏
$('.regionleft li').hover(function () {
    var num = $(this).index();
    $('.regionright .aaa')
        .eq(num)
        .css('display', 'block')
        .siblings()
        .css('display', 'none')
})
$('.regionleft li').mouseleave(function () {
    $('.regionright .aaa')
        .css('display', 'none')

})

$('.regionright').hover(function () {
    $('.regionright .aaa')
        .css('display', 'block')
})

$('.regionright').mouseleave(function () {
    $('.regionright .aaa')
        .css('display', 'none')
})