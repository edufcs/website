define('http/index', function(require, exports, module) {

  'use strict';
  
  var http = function http($, opts, _success, _error, _complete) {
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
        if (_success) _success(res);
      },
      error: function error(err) {
        if (_error) _error(err);
      },
      complete: function complete(msg) {
        if (_complete) _complete(msg);
      }
    });
  };
  
  module.exports = http;

});
