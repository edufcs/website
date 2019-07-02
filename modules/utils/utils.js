define('utils', function(require, exports, module) {

  'use strict';
  
  var utils = {
    //时间格式化
    formatDateTime: function formatDateTime(time) {
      var Time = time ? new Date(time) : new Date();
      var year = Time.getFullYear();
      var month = Time.getMonth() + 1;
      var date = Time.getDate();
      date = date < 10 ? '0' + date : date;
      var hour = Time.getHours();
      var minute = Time.getMinutes();
      minute = minute < 10 ? '0' + minute : minute;
      var second = Time.getSeconds();
      second = second < 10 ? '0' + second : second;
      return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
    },
    checkNum: function checkNum(str) {
      var reg = /\d/ig;
      if (reg.test(str)) {
        str = str.replace(!reg, '');
        return str;
      }
    },
    //检查手机是否合法
    checkPhone: function checkPhone(str) {
      var reg = /^[1][3,4,5,7,8][0-9]{9}$/gi;
      if (reg.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    //获取地址栏参数
    getSiteParams: function getSiteParams() {
      var fullPath = window.location.href;
      var pathName = window.document.location.pathname;
      var paramsStr = fullPath.split('?')[1];
      var paramsObj = {};
      paramsStr.split('&').forEach(function (val, i) {
        var tempArr = val.split('=');
        paramsObj[tempArr[0]] = tempArr[1];
      });
      return paramsObj;
    },
    //缓动动画
    buffer: function buffer(obj, json, fn) {
      // 3.1 清除定时器
      clearInterval(obj.timer);
      // 3.2 设置定时器
      var begin = 0,
          target = 0,
          speed = 0;
      obj.timer = setInterval(function () {
        // 3.2.0 定义一个旗帜
        var flag = true; // 记录是否清除定时器
        for (var k in json) {
          // 3.2.1 求出初始值
          if ('opacity' == k) {
            // 透明度
            begin = parseInt(parseFloat(utils.getCSSAttrValue(obj, k)) * 100) || 100;
            target = parseInt(json[k] * 100);
          } else if ('scrollTop' == k) {
            // 其他情况
            begin = obj.scrollTop;
            target = parseInt(json[k]);
            /*console.log(begin, target);*/
          } else {
              // 其他情况
              begin = parseInt(utils.getCSSAttrValue(obj, k)) || 0;
              target = parseInt(json[k]);
            }
          // 3.2.2 求出步长
          speed = (target - begin) / 20;
          // 取整(向上 向下)
          speed = target > begin ? Math.ceil(speed) : Math.floor(speed);
          // 3.2.3 动起来
          if ('opacity' == k) {
            // 其他浏览器
            obj.style.opacity = (begin + speed) / 100;
            // IE
            obj.style.filter = 'alpha(opacity: ' + (begin + speed) + ')';
          } else if ('zIndex' == k) {
            // 层级结构
            obj.style[k] = json[k];
          } else if ('scrollTop' == k) {
            // 滚动
            obj.scrollTop = begin + speed;
          } else {
            obj.style[k] = begin + speed + 'px';
          }
          // 3.2.4 判断--> 只要有一个属性的动画没有到位就一定不能清除定时器
          if (target != begin) {
            flag = false;
          }
        }
  
        // 3.3 清除定时器
        if (flag) {
          clearInterval(obj.timer);
          // 判断有没有回调函数
          if (fn) {
            // 只要定时器被清除了,就应该执行回调函数
            fn();
          }
        }
      }, 20);
    },
    //获取css属性值
    getCSSAttrValue: function getCSSAttrValue(obj, attr) {
      if (obj.currentStyle) {
        return obj.currentStyle[attr];
      } else {
        return window.getComputedStyle(obj, null)[attr];
      }
    }
  
  };
  
  module.exports = utils;

});
