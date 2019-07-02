define('common', function(require, exports, module) {

  
  /**
   项目JS主入口
   以依赖layui的layer和form模块为例
   **/
  'use strict';
  
  var api = require('http/api');
  var utils = require('utils/index');
  layui.define(['jquery'], function (exports) {
    var $ = layui.$; //重点处
    var obj = {
      http: function http(opts) {
        opts = opts || {};
        var type = opts.type ? $.trim(opts.type.toLowerCase()) : 'get';
        $.ajax({
          url: opts.url,
          type: type,
          data: opts.data || {},
          contentType: type == 'post' ? "application/json" : "",
          timeout: opts.timeout || 10000,
          beforeSend: function beforeSend() {
            if (type == 'post') {
              opts.data = JSON.stringify(opts.data);
            }
          },
          success: function success(res) {
            if (opts.success) opts.success(res);
          },
          error: function error(err) {
            if (opts.error) opts.error(err);
          },
          complete: function complete() {
            if (opts.complete) opts.complete('complete');
          }
        });
      },
      api: api,
      utils: utils
    };
    exports('common', obj); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
  });
  
  layui.config({
    base: '/modules/' //自定义layui组件的目录
  }).extend({ //设定组件别名
    common: 'common'
  });

});
