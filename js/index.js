// 顶部搜索框
$('.icon-fangdajing').mouseenter(function () {
    // $('#input').css('display','block');
    $('#input').stop().show(200);
    $(this).css('color', 'green');
});
$('.icon-fangdajing').mouseleave(function () {
    // $('#input').css('display','none');
    $('#input').stop().hide(200);
    $('.icon-fangdajing').css('color', 'white');
});
$('#input').mouseenter(function () {
    // $('#input').css('display','block');
    $('#input').stop().show(200);
    $(this).css('color', 'green');
});
$('#input').mouseleave(function () {
    // $('#input').css('display','none');
    $('#input').stop().hide(200);
    $('.icon-fangdajing').css('color', 'white');
});
// 顶部搜索框结束


// 下面的社区之类的开始
$('#shequ').mouseenter(function () {
    $('#shequ').css('color','green').stop().show(200);
});
$('#shequ').mouseleave(function () {
    $('#shequ').stop().hide(200);
});
$('#nav_list li:eq(2)').mouseenter(function () {
    $('#shequ').stop().show(200);
});
$('#nav_list li:eq(2)').mouseleave(function () {
    $('#shequ').stop().hide(200);
});
$('#nav_list li:eq(4)').mouseenter(function () {
    $('#shop').stop().show(200);
});
$('#shop').mouseenter(function () {
    $('#shop').stop().show(200);
});
$('#shop').mouseleave(function () {
    $('#shop').stop().hide(200);
});
$('#nav_list li:eq(4)').mouseleave(function () {
    $('#shop').stop().hide(200);
});
$('#nav_list li:eq(5)').mouseenter(function () {
    $('#host').stop().show(200);
});
$('#nav_list li:eq(5)').mouseleave(function () {
    $('#host').stop().hide(200);
});
$('#host').mouseenter(function () {
    $('#host').stop().show(200);
});
$('#host').mouseleave(function () {
    $('#host').stop().hide(200);
});
$('#nav_list li:eq(6)').mouseenter(function () {
    $('#news').stop().show(200);
});
$('#nav_list li:eq(6)').mouseleave(function () {
    $('#news').stop().hide(200);
});
$('#news').mouseenter(function () {
    $('#news').stop().show(200);
});
$('#news').mouseleave(function () {
    $('#news').stop().hide(200);
});
$('#nav_list li:eq(7)').mouseenter(function () {
    $('#app').stop().show(200);
});
$('#nav_list li:eq(7)').mouseleave(function () {
    $('#app').stop().hide(200);
});
$('#app').mouseenter(function () {
    $('#app').stop().show(200);
});
$('#app').mouseleave(function () {
    $('#app').stop().hide(200);
});
// 下面社区之类的结束
// 菜单栏的跳转
$('.menu li').click(function(){
        var indexv = $(this).index();
        $('#menu li').eq(indexv).show(200).siblings().hide(200);
});



  $('#showlist span').mouseenter(function(){
    var indext = $(this).index();
    $('#piclist img').eq(indext).css('display','block').siblings().css('display','none');
  });


  // 鼠标进入的时候i标签可以动
var li = document.querySelectorAll('.fixed li i');
var timerr;
console.log(li)
$('.fixed li').mouseenter(function( ) { 
    var index = $(this).index();
    timerr = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(-20deg)';
    },100)
    timerr = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(20deg)';
    },200)
    timerr = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(-10deg)';
    },300)
    timerr = setTimeout(function() {
        // $(this).children('i').css('transform','rotateY('+30+'deg'+')');
        li[index].style.transform = 'rotate(10deg)';
    },400)
    timerr = setTimeout(function() {
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