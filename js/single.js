// 导航栏部分特效
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


// banner部分特效
// banner轮播
var index = 0;
var timer;

function autoPlay() {
    timer = setInterval(function timer() {
        $('.banner-img ul li').eq(index).stop().fadeOut(2000);
        index++;
        if (index > $('.banner-img ul li').length - 1) {
            index = 0;
        }
        $('.banner-img ul li').eq(index).stop().fadeIn(1000);
    }, 2000)
}
autoPlay();



//特色长线轮播部分
var index = 0;
var banner = $('.special-top-banner>li')
$('.special-jianright').click(function () {
    index++;
    if (index > banner.length - 1) {
        index = 0;
    }
    var newindex = index + 1;
    if (index == 2) {
        newindex = 0;
    }
    banner.eq(index).css('display', 'block').siblings().css('display', 'none')
    var righttxt = $('.special-scroll span').eq(index).text();
    var lefttxt = $('.special-scroll span').eq(newindex).text();
    $('.special-left-text span').text(lefttxt)
    $('.special-right-text span').text(righttxt)
})
$('.special-jianleft').click(function () {
    index--;
    if (index < 0) {
        index = banner.length - 1;
    }
    var newindex = index + 1;
    if (index == 2) {
        newindex = 0;
    }
    banner.eq(newindex).css('display', 'block').siblings().css('display', 'none')
    var righttxt = $('.special-scroll span').eq(index).text();
    var lefttxt = $('.special-scroll span').eq(newindex).text();
    $('.special-left-text span').text(lefttxt)
    $('.special-right-text span').text(righttxt)
})


// Q-home大图片轮播部分
var big = $('.qHome-middle li');
var small = $('.qHome-slide li');
$('.qHome-slide li').mouseenter(function () {
    var index = $(this).index();
    $('.qHome-middle li').eq(index).fadeIn(500).siblings().fadeOut();
    $('.qHome-slide li').eq(index).addClass('active').siblings().removeClass('active');
})


// 固定返回顶部的动画效果
// 鼠标进入的时候i标签可以动
var li = document.querySelectorAll('.fixed li i');
var timer;
console.log(li)
$('.fixed li').mouseenter(function () {
    var index = $(this).index();
    timer = setTimeout(function () {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(-20deg)';
    }, 100)
    timer = setTimeout(function () {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(20deg)';
    }, 200)
    timer = setTimeout(function () {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(-10deg)';
    }, 300)
    timer = setTimeout(function () {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(10deg)';
    }, 400)
    timer = setTimeout(function () {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(0deg)';
    }, 450)
})
// 注册页面上拉事件
$('.fixed').css('display', 'none');
$(window).scroll(function () {
    // 获取页面的上拉高度
    var height = $('html,body').scrollTop();
    if (height >= 200) {
        $('.fixed').stop().fadeIn(300, 'linear');
    } else {
        $('.fixed').stop().fadeOut(300, 'linear');
    }
})
// 点击返回顶部，立即回到页面顶部
$('.fixed li').eq(0).click(function () {
    // 这里为了考虑兼容性，需要把HTML和body都写上
    $('html,body')
        .stop()
        .animate({
            scrollTop: 0,
        }, 400, 'linear')
})



$('.day-travel').click(function () {
    var v = $('.exclusive').offset().top;
    // 动画
    $('html,body').animate({
        scrollTop: v
    }, 200, 'linear');
})
$('.long-line').click(function () {
    var v = $('.special').offset().top;
    // 动画
    $('html,body').animate({
        scrollTop: v
    }, 200, 'linear');
})
$('.backhome').click(function () {
    var v = $('.qHome').offset().top;
    // 动画
    $('html,body').animate({
        scrollTop: v
    }, 200, 'linear');
})