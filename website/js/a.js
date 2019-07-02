define('website/js/a', function(require, exports, module) {

  'use strict';
  
  console.log('a');
  
  layui.use(['jquery', 'layer', 'form'], function () {
    var layer = layui.layer,
        $ = layui.$,
        //重点处
    form = layui.form;
  
    $('#a').css({ color: 'blue' });
  
    layer.msg('Hello World');
  
    //监听提交
    form.on('submit(formDemo)', function (data) {
      layer.msg(JSON.stringify(data.field));
      return false;
    });
  });

});
