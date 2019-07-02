define('utils/a', function(require, exports, module) {

  'use strict';
  
  var a = {
    fA: function fA() {
      console.log('a');
    },
    fB: function fB() {
      console.log('b');
    }
  };
  
  module.exports = a;

});
