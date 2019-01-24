var indexr = 0;
autoplay();
var timer;
function autoplay(){
    timer = setInterval(function(){
            // 找到轮播当前项，淡出隐藏      
          
            indexr ++;
         
            // 限制索引
            if (indexr > $('.content ul').length -1) {
              indexr = 0;
            }     
            // 下一个轮播项淡入显示
            $('.content ul').eq(indexr)
            .fadeIn()
            .siblings()
            .fadeOut();
             
    },3000)
}
autoplay();
$('.content').mouseenter(function () {
    console.log('haiua');
    clearInterval(timer);
  });
  //  鼠标离开轮播区，重新启动自动轮播
  $('.content').mouseleave(function () {
    autoplay();
  });
