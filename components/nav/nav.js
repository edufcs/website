define('components/nav/nav', function(require, exports, module) {

  'use strict';
  
  layui.use(['element', 'jquery'], function () {
    var element = layui.element,
        $ = layui.$; //重点处
  
    var url = location.href;
    var about = /about/ig.test(url);
  
    if (about) {
      $('.ul-nav li:last').addClass('layui-this').siblings().removeClass('layui-this');
    } else {
      $('.ul-nav li:first').addClass('layui-this').siblings().removeClass('layui-this');
    }
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > $('.nav').innerHeight()) {
        $('.nav').addClass('fix-nav');
        $('.back-up').fadeIn();
      } else {
        $('.nav').removeClass('fix-nav');
        $('.back-up').fadeOut();
      }
    });
  
    $('.back-up').click(function () {
      console.log('!!!');
      $("html,body").animate({ "scrollTop": 0 });
    });
  });

});
