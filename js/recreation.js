
//导航栏鼠标进入显示部分
$('.topNav')
    .find('.publicLi')
    .mouseenter(function () {
        $(this)
            .find('.public')
            .css('display', 'block')
    });

$('.topNav')
    .find('.publicLi')
    .mouseleave(function () {
        $(this)
            .find('.public')
            .css('display', 'none')
    });

//搜索框鼠标进入变宽效果
$('.searchDiv').mouseenter(function(){
    

    $('.scarch').animate({
        width: 220,
    }, 200, 'linear')

})
$('.searchDiv').mouseleave(function(){

    $('.scarch').animate({
        width: 0,
    }, 200, 'linear')
    
});

//轮播图淡入淡出js效果

//鼠标进入小图片

// 1 小图片显示边框效果
// 2 三角形出现
// 3 指定大图出现

//小图添加鼠标进入效果
$('.smallimg')
.find('li')
.mouseenter(function (){
    //记录小图下标位置 是大图显示
    var index = $(this).index();
    //改变边框以及三角形样式
    $(this)
    .css('border','2px solid #e0ffff')
    .children('.triangleimg')
    .css('display','block')  //显示边框和三角形
    .parent('li')      ////隐藏边框和三角形
    .siblings('li')
    .css('border','none')
    .children('.triangleimg')
    .css('display','none');
    console.log(index)
     //淡入淡出效果
   var num= $('.mainImg .bg')
    .eq(index)
    .fadeIn(400,'linear')
    .siblings()
    .eq(index)
    .fadeOut(400,'linear')
    console.log(num)

});

//自动轮播效果
// 1 小图显示边框三角形
// 2 大图指定轮动

var index = 0;
 var dsq = setInterval(fn,2000)
function fn (){
   index++;
   if(index>4){
       index = 0;
   }
   $('.mainImg .bg')
   .eq(index)
   .fadeIn(390,'linear')
   .siblings()
   .fadeOut(190,'linear')

   $('.smallimg')
   .find('li')
   .eq(index)
   .css('border','2px solid #e0ffff')
    .children('.triangleimg')
    .css('display','block')  //显示边框和三角形
    .parent('li')      ////隐藏边框和三角形
    .siblings('li')
    .css('border','none')
    .children('.triangleimg')
    .css('display','none');
    console.log(index)
}

//停止定时器
$('mainImg').mouseenter (function(){
    clearInterval('dsq')
});



// 问题遗留  鼠标不能再dl上面入
// 鼠标进入显示版面列表
$('.rightWord')
.find('.item1')
.children('a')
.mouseenter(function (){
 $('.contury-list')
 .fadeIn(200,'linear');
});
//鼠标离开事件
$('.rightWord')
.find('.item1')
.children('a')
.mouseleave(function (){
 $('.contury-list')
 .fadeOut(600,'linear');
});



//tab切换li下表面底边框
$('.tabList li').click(function () { 
    var index = $(this).index();
    $(this)
    .css( 'border-bottom' ,'1px solid #10b041')
    .siblings()
    .css('border-bottom','none');
    $('.tabWord')
    .children('.tab')
    .eq(index)
    .css('display','block')
    .siblings('.tab')
    
    .css('display','none')
})

//点击x删除固定定位p标签
$('.banner')
.children('p')
.click(function () {
 $('.banner')
 .css('display','none');
});


//返回顶部操作
// var v1 = $('.tabList').offset().top;
$(window).scroll (function () {
    // 滚轮滚动距离
    var v2 = $(window).scrollTop();
    // var v3 = $('.returnTop').scrollTop()
    //判断
    if ( v2 >= 500){
        // 回到顶部要显示
        $('.returnTop').show();
        //  v3 === (v2);
    }else{
        // 回到顶部要显示
        $('.returnTop').hide();

    }


});
//返回顶部操作
$('.returnTop')
.find('.li1')
.click(function () {
$(window).scrollTop(0)
});


//扫码操作
$('.returnTop')
.find('.li2')
.mouseenter(function() {
  $('.divh5').css('display','block')
});

$('.returnTop')
.find('.li2')
.mouseleave(function() {
  $('.divh5').css('display','none')
});






