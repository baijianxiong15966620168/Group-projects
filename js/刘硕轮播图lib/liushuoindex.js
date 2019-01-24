// 初始化
$('.jcarousel')
  .jcarousel({
    // 配置
    wrap: 'circular'
  })
  // 开启自动轮播
  .jcarouselAutoscroll({
    interval: 1500,
    target: '+=1',
    autostart: true
  });

// 点击左侧按钮实现轮播
$('.prev')
  .on('jcarouselcontrol:active', function () {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function () {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '-=1'
  });
// 点击右侧按钮实现轮播
$('.next')
  .on('jcarouselcontrol:active', function () {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function () {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '+=1'
  });
// 点击小点实现轮播
$('.controls')
  .on('jcarouselpagination:active', 'a', function () {
    $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function () {
    $(this).removeClass('active');
  })
  .jcarouselPagination();

// 鼠标进入的轮播区，停止自动轮播
$('.banner').mouseenter(function () {
  $('.jcarousel').jcarouselAutoscroll('stop');
});
// 鼠标离开的轮播区，启动自动轮播
$('.banner').mouseleave(function () {
  $('.jcarousel').jcarouselAutoscroll('start');
});

