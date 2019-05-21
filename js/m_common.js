var initScreen = function () {
  $("html").css("font-size", document.documentElement.clientWidth / 375 * 312.5 + "%");
}
$(window).on('onorientationchange' in window ? 'orientationchange' : 'resize', function () {
  setTimeout(initScreen, 200);
});

// index tab news
$('.page2 .tab').delegate('li', 'click', function () {
  $(this).addClass("active").siblings().removeClass("active");
  var index = $(this).index(); //获取索引号
  $(this).parent().siblings().children().eq(index).addClass("selected").siblings().removeClass("selected")
})

$('.page3 .tab').delegate('li', 'click', function () {
  $(this).children().addClass("active").parent().siblings().children().removeClass("active");
  var index = $(this).index(); //获取索引号
  $(this).parent().siblings().children().eq(index).addClass("selected").siblings().removeClass("selected")
})



$('.close').click(function () {
  $('#gift').hide();
  $('#login').hide();
  $('.login-layer').hide();
  $('#video-layer').hide();
  $('video').trigger('pause');
})
$('.gift').click(function () {
  $('.login-layer').show();
  $('#gift').show();
})

function login() {
  $('#login').hide();
  $('.login-layer').hide();
}

