

// index tab news
function Move(obj) {
  $(obj).addClass("active").siblings().removeClass("active");
  var index = $(obj).index(); //获取索引号
  $(".page1 .main").eq(index).addClass("selected").siblings().removeClass("selected");

}
// 职业/龙神切换
function slice(obj) {
  var index = $(obj).index(); //获取索引号
  if(index==0){
    $(obj).parent().addClass('active')
  }else{
    $(obj).parent().removeClass('active')
  }
  $(".page2 .main").eq(index).addClass("selected").siblings().removeClass("selected");
  var mySwiper2 = new Swiper ('.longSheng', {
    initialSlide :0,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.dd',
      prevEl: '.cc',
    },
  
  }) 
}
// 手风琴
$('.page3 .list').click(function(){
  $(this).hide().parent().addClass('active').siblings().removeClass('active').find('.list').show()
  })
  //列表页tab
function tabNews(obj) {
  $(obj).addClass("active").siblings().removeClass("active");
  var index = $(obj).index(); //获取索引号
  $(".right .main").eq(index).addClass("selected").siblings().removeClass("selected");
}


//点礼包弹--绑定手机领取礼包
$('.gift_wrap').click(function(){
  $('#login').show();
})
//关闭video
$('.close').click(function(){
  $('#gift').hide();
  $('#login').hide();
  $('.login-layer').hide();
  $('#video-layer').hide();
  $('video').trigger('pause');
})
//下载
$('.down').click(function(){
 
  
})
//video播放
$('.palyer').click(function(){
  $('.login-layer').show();
  $('#video-layer').show();
  $('video').trigger('play');
})
//绑定手机领取礼包
function login(){
  $('#login').hide();
  $('.login-layer').hide();
  $('.login-layer').show();
  $('#gift').show();
}


   
