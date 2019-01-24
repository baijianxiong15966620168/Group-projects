// 顶部下拉
$('.a-nav .ad').mouseover(function(){
    $(this).children('.slc,.sjx').stop().show(200)
   
 })
 $('.a-nav .ad').mouseout(function(){
    $(this).children('.slc').stop().hide(200)  
 })


// 顶部输入框
 $('.text button').mouseover(function(){
    $('.text input').animate({
        width:188 
    },100);
    $('.text button').css('background','white')
    $('.text i').css('color','#ccc')
 }) ;

 $('.text input').mouseout(function(){
    $('.text input').stop().animate({
        width:0
    },0) ;
    
   // $('.text input').css({display:none})
    $('.text .active').width(188)
    $('.text button').css('background','black')
    $('.text i').css('color','')
 });

 $('.text input').click(function(){
   $('.text input').addClass('active');
   $('.text input').width(188)
 }) ;

$('body').click(function(e){
   e.stopPropagation();
   $('.text input').stop().animate({
      width:0
  },0) ;
}) ;

// 中间隐藏的国家
var num = 0 ;
$('.first-lis .tab a').click(function(){
   num++ ;
   if(num%2==1){
   $('.ying')
   .show()
   $('.yin1')
   .show()
   $('.mudd')
   .css('overflow','auto')
   }else{
      $('.ying')
   .hide()
   $('.yin1')
   .hide()
   $('.mudd')
   .css('overflow','auto')
   }
   
})
$('.ying li').click(function(){
   var index = $(this).index();
   $('.yin1 li')
   .eq(index)
   .show()
   .siblings('.yin1 li')
   .hide()
})


//  广告区域的 1--10按钮
 $('.btn a').click(function(){
      $(this)
      .css('background','#5ea67c')
      .siblings('.btn a')
      .css('background','');

      var index = $(this).index() ; 

      $('.content')
      .eq(index)
      .fadeIn(800)
      .siblings('.content')
      .fadeOut(800) ;
   
 })
var ind = 0 ;
 $('.btn .xy').click(function(){
    ind++ ;
    if(ind>9){
      ind=0 ;
   }
    $('.content')
      .eq(ind)
      .fadeIn(800)
      .siblings('.content')
      .fadeOut(800) ;
   $('.btn a')
      .eq(ind)
      .css('background','#5ea67c')
      .siblings('.btn a')
      .css('background','');
   
 })
 

// 动图
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   var y = e.pageY-$('.p1').offset().top
   $('.tt1').css({
      left:-x/40-104,
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   $('.tt2').css({
      left:-x/25+130
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   $('.tt3').css({
      left:x/50-103
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   $('.tt4').css({
      left:-x/70-219
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   $('.tt5').css({
      left:-x/60+190
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   $('.tt6').css({
      left:-x/60+217
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   $('.tt7').css({
      left:-x/70-133
   })
})
$('.quyu').mousemove(function(e){
   var x = e.pageX-$('.p1').offset().left
   var y = e.pageY-$('.p1').offset().top
   $('.tt8').css({
      left:-x/80-170,
      top:-y/100
   })
})

// 跳动的图标
window.setInterval(function(){
  window.setTimeout(function(){
      height=$('.tt5').height()
      $('.tt5 img').css({           
        marginTop:-20 
       })
   },1000)
   window.setTimeout(function(){
      height=$('.tt5').height()
      $('.tt5 img').css({           
        marginTop:0 
       })
   },1200)
   window.setTimeout(function(){
      height=$('.tt5').height()
      $('.tt5 img').css({           
        marginTop:-10
       })
   },1300)
   window.setTimeout(function(){
      height=$('.tt5').height()
      $('.tt5 img').css({           
        marginTop:0 ,
       })
   },1400)
   window.setTimeout(function(){
      height=$('.tt5').height()
      $('.tt5 img').css({           
        marginTop:-4 
       })
   },1500)
   window.setTimeout(function(){
      height=$('.tt5').height()
      $('.tt5 img').css({           
        marginTop:0 
       })
   },1520)
},3000)






// 侧边栏
var len = $('.center').offset().top ;
$(window).scroll(function(){
    var len1 = $(window).scrollTop() ;
    if(len1>=len){
        $('.subnav').show(500) ;
    }else{
        $('.subnav').hide(500) ;
    }

if(len1>=$('.center').offset().top){
   $('.subnav li').eq(0).addClass('current').siblings().removeClass('current')
}
if(len1>=$('.banner').offset().top){
   $('.subnav li').eq(1).addClass('current').siblings().removeClass('current')
}
$('.back').click(function(){
   $('body,html').animate({
      scrollTop:0 
   })
})
})