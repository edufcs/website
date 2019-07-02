define('http/api', function(require, exports, module) {

  // const baseUrl = '/http/';
  'use strict';
  
  var baseUrl = 'http://jmf668.com/website_web/';
  
  var api = {
      getBanner: {
          url: baseUrl + 'mainHomeAdver/mainHomeByPage',
          type: 'get'
      },
      getHomePageArticle: {
          url: baseUrl + 'article/getHomePageArticle',
          type: 'get'
      },
      sendFeedBack: {
          url: baseUrl + 'userFeedback/createUserFeedback',
          type: 'get'
      },
      //获取全部文章
      getArticleByPage: {
          url: baseUrl + 'article/getArticleByPage',
          type: 'get'
      },
      // 获取文章详情
      getArticleById: {
          url: baseUrl + '/article/getArticleById',
          type: 'get'
      },
      //获取上一篇下一篇
      getLastAndNext: {
          url: baseUrl + '/article/getLastAndNext',
          type: 'get'
      },
      //点赞
      updateBestNum: {
          url: baseUrl + '/article/updateBestNum',
          type: 'get'
      }
  };
  module.exports = api;

});
