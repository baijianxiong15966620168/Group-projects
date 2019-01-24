// 顶部搜索框
$('.icon-fangdajing').mouseenter(function(){
    // $('#input').css('display','block');
    $('#input').show(200);
    $(this).css('color','green');
});
$('#input').mouseleave(function(){
    // $('#input').css('display','none');
    $('#input').hide(200);
    $('.icon-fangdajing').css('color','white');
});