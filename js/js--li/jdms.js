
// 顶部下拉
$('.a-nav li').mouseover(function(){
    $(this).children('.slc').stop().show(200)
   
 })
 $('.a-nav li').mouseout(function(){
    $(this).children('.slc').stop().hide(200)  
 })


// 顶部输入框
 $('.text button').mouseover(function(){
    $('.text input').animate({
        width:188,
        height:20 
    },100);
 }) ;

 $('.text input').mouseout(function(){
    $('.text input').stop().animate({
        width:0
    },0) ;
    
   $('.text input').css({display:none})
    $('.text .active').width(188)
 });

 $('.text input').click(function(){
   $('.text input').addClass('active');
   $('.text input').width(188)
 }) ;

$('body').click(function(){
   $('.text input').stop().animate({
      width:0
  },0) ;
}) ;

// 广告类别
$(".banner-item").find("li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");  
  var num = $(this).index();
  $(".banner-area")
  .find(".banner-text")
  .eq(num)
  .css("display","block").siblings().css("display","none");
})
// 广告类别
$(".banner-hotel").click(function () {
    $(".banner-bgcolor-hotel").animate({left:0},1000);
    $(".search-check").css("color","#1467B6");
    $(".search-btn").css("background","linear-gradient(to right,#ffb732 0,#ff9e09 100%)");
})
$(".banner-home").click(function () {
    $(".banner-bgcolor-hotel").animate({left:-200+'%'},1000)
    $(".search-check").css("color","red");
    $(".search-btn").css("background","linear-gradient(to right,#fe965f 0,#fd7c77 100%)");
})

// 广告搜索
$(".banner-search").find(".search-city").click(function (e) {
    $(".banner-menu").show();
    // 阻止冒泡
    e.stopPropagation();
})
$("body").click(function () {
    $(".banner-menu").hide(); 
})

$(".banner-search").find(".search-btn").click(function (e) {
    $(".banner-menu").show();
     // 阻止冒泡
     e.stopPropagation();
})
$("body").click(function () {
    $(".banner-menu").hide(); 
})
// 广告区域
$(".banner-list").find(".rig-list").mouseenter(function () {
    $(".rig-list").find(".lists").show();
})
$(".banner-list").find(".rig-list").mouseleave(function () {
    $(".rig-list").find(".lists").hide();
})

$(".item-boxs a").click(function () {
     var n = $(this).text();
     $(".search-city").val(n);
})


// 内容区域卡片
$(".card li").find(".picture").mouseover(function () {
    $(this).find(".first2").stop().fadeIn(200);
    $(this).find(".first1").stop().fadeIn(200);
})
$(".card li").find(".picture").mouseout(function () {
    $(this).find(".first2").stop().fadeOut(200);
    $(this).find(".first1").stop().fadeOut(200);
})

$(".card li").find(".item").mouseover(function () {
    $(this).find(".second2").stop().fadeIn(200);
    $(this).find(".second1").stop().fadeIn(200);
})
$(".card li").find(".item").mouseout(function () {
    $(this).find(".second2").stop().fadeOut(200);
    $(this).find(".second1").stop().fadeOut(200);
})


// 大旅馆卡片
// 左侧
$(".le-hotel-card").find(".card").mouseenter(function () {
    $(this).find(".three1").stop().fadeIn(200);
    $(this).find(".three2").stop().fadeIn(200);
})
$(".le-hotel-card").find(".card").mouseleave(function () {
    $(this).find(".three1").stop().fadeOut(200);
    $(this).find(".three2").stop().fadeOut(200);
})
// 右侧
$(".rig-hotel-card").find(".card1").mouseenter(function () {
    $(this).find(".three1").stop().fadeIn(200);
    $(this).find(".three2").stop().fadeIn(200);
})
$(".rig-hotel-card").find(".card1").mouseleave(function () {
    $(this).find(".three1").stop().fadeOut(200);
    $(this).find(".three2").stop().fadeOut(200);
})


// 鼠标进入li让对应的div显示
$(".content-list").find("li").click(function () {
     $(this).addClass("active").siblings().removeClass("active");
     var num = $(this).index();
     $(".city").find(".content-city").eq(num).stop().fadeIn(100).siblings().stop().fadeOut(100);

})


// 返回顶部
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
