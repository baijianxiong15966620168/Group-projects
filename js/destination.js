
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

// 开始的文字时出现
$(function () {
    $('.main-banner .text').typewriter();
});

// 热门城市推荐部分特效
$('.hot-city .slip-lis li').mouseenter(function () {
    var newIndex = $(this).index();
    // 让当前的li字体颜色变成黑色
    $(this)
        .css('color', 'black')
        .css('cursor', 'pointer')
        .siblings()
        .css('color','#9292ad');
    // 让城市切换部分显示
    $('.hot-city .city-toggle .show')
        .eq(newIndex)
        .stop()
        .slideDown(1000, 'linear')
        .siblings()
        .stop()
        .hide(0);
    // 让下面的全部城市部分动画
    $('.look-all-city')
        .stop()
        .animate({
            marginTop: 20,
        }, 100);
    // 下面的p标签跟着移动
    // 获取里面li距离文档的距离
    var moveX = $(this).offset().left;
    var lisX  = $('.hot-city .slip-lis').offset().left;
    $('.hot-city .slip-lis p' )
        .stop()
        .animate({
            left:moveX- lisX,
        },300,'linear')
        .css({
            width:$(this).width(),
        })
});
// 让一开始的时候P标签的宽度是第一个li的宽度
var liLfet = $('.hot-city .slip-lis li').eq(0).offset().left;
var cityLfet = $('.hot-city .slip-lis').offset().left;
$('.hot-city .slip-lis p' )
    .css({
        left:liLfet - cityLfet,
        width: $('.hot-city .slip-lis li')
            .eq(0)
            .width(),
    });
$('.hot-city .slip-lis li').eq(0).css('color','black');

// 主题目的地部分
// 当一进来的时候,设置p为第一个li的宽度
$('.destination .slip-lis li').eq(0).css('color','black');
var destinationSlipLeft = $('.destination .slip-lis').offset().left;
var destinationFirstLiLeft = $('.destination .slip-lis li')
    .eq(0)
    .offset()
    .left;
$('.destination .slip-lis p')
    .css({
        left:destinationFirstLiLeft - destinationSlipLeft,
        width: $('.destination .slip-lis li')
            .eq(0)
            .width(),
    });
// 当鼠标移动到li里面时，li的字体颜色变成黑色，
// p标签跟着移动，对应下标的图片部分显示
$('.destination .slip-lis li').mouseenter(function( ) { 
    var Lindex = $(this).index();
    $(this)
        .css('color','black')
        .css('cursor','pointer')
        .siblings()
        .css({
            color:'#9292ad'
        })
    // 让对应的图片显示
    $('.destination-main .photo')
        .eq(Lindex)
        .siblings()
        .css('display','none')
        .end()
        .css('display','block')
    // 让下面的跟着移动
    $('.destination .slip-lis p')
        .stop()
        .animate({
            left:$(this).offset().left - destinationSlipLeft,
        },100,'linear')
        .css('width',$(this).width());
});


// 月度推荐部分
//   当鼠标进入的时候
$('.month-list li')
    .eq(0)
    .css({ 
        backgroundColor:'#21bf6a',
        color:'#fff',
    })
$('.month-list li').mouseenter( function( ) { 
    var Lindex = $(this).index();
    $(this)
        .css({
            backgroundColor:'#21bf6a',
            color:'#fff',
            cursor: 'pointer',
        })
        .siblings()
        .css({
            color:'#989292',
            backgroundColor:'#fff',
        })
    $('.month-recommend .month-photo ul')
        .eq(Lindex)
        .css('display','flex')
        .siblings()
        .css('display','none')
});


// 国家列表部分
// 初始化P标签
$('.continent-list li').eq(0).css('color','black');
var continentListLeft = $('.continent-list').offset().left;
var continentFirstListLeft = $('.continent-list li').eq(0).offset().left;
$('.continent-list p')
    .css({
        width:$('.continent-list li').eq(0).width(),
        left:continentFirstListLeft - continentListLeft,
    });
// 添加鼠标进入事件
$('.continent-list li').mouseenter(function() { 
    var Lindex = $(this).index();
    $(this)
        .css('color','black')
        .css('cursor','pointer')
        .siblings()
        .css('color','#9292ad');
    // p标签跟着移动
    $('.continent-list p')
        .stop()
        .animate({
            left: $(this).offset().left - continentListLeft,
        },300,'linear')
        .css('width',$(this).width());
    // 对应的列表显示
    $('.city-order ul')
        .eq(Lindex)
        .css('display','block')
        .siblings()
        .css('display','none');
});


// 固定返回顶部的动画效果
// 鼠标进入的时候i标签可以动
var li = document.querySelectorAll('.fixed li i');
var timer;
console.log(li)
$('.fixed li').mouseenter(function( ) { 
    var index = $(this).index();
    timer = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(-20deg)';
    },100)
    timer = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(20deg)';
    },200)
    timer = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(-10deg)';
    },300)
    timer = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(10deg)';
    },400)
    timer = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(0deg)';
    },450)
})


// 注册页面上拉事件
$('.fixed').css('display','none');
$(window).scroll(function() { 
    // 获取页面的上拉高度
    var height = $('html,body').scrollTop();
    if(height >= 200) {
        $('.fixed').stop().fadeIn(300,'linear');
    } else {
        $('.fixed').stop().fadeOut(300,'linear');
    }
})

// 点击返回顶部，立即回到页面顶部
$('.fixed li').eq(0).click(function() {
    // 这里为了考虑兼容性，需要把HTML和body都写上
    $('html,body')
        .stop()
        .animate({
            scrollTop:0,
        },400,'linear')
})