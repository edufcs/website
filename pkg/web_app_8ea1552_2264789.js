define("http/api",function(e,t,r){"use strict";var a="http://jmf668.com/website_web/",g={getBanner:{url:a+"mainHomeAdver/mainHomeByPage",type:"get"},getHomePageArticle:{url:a+"article/getHomePageArticle",type:"get"},sendFeedBack:{url:a+"userFeedback/createUserFeedback",type:"get"},getArticleByPage:{url:a+"article/getArticleByPage",type:"get"},getArticleById:{url:a+"/article/getArticleById",type:"get"},getLastAndNext:{url:a+"/article/getLastAndNext",type:"get"},updateBestNum:{url:a+"/article/updateBestNum",type:"get"}};r.exports=g});
define("utils",function(t,e,r){"use strict";var n={formatDateTime:function(t){var e=t?new Date(t):new Date,r=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();a=10>a?"0"+a:a;var o=e.getHours(),l=e.getMinutes();l=10>l?"0"+l:l;var i=e.getSeconds();return i=10>i?"0"+i:i,r+"-"+n+"-"+a+" "+o+":"+l+":"+i},checkNum:function(t){var e=/\d/gi;return e.test(t)?t=t.replace(!e,""):void 0},checkPhone:function(t){var e=/^[1][3,4,5,7,8][0-9]{9}$/gi;return e.test(t)?!0:!1},getSiteParams:function(){var t=window.location.href,e=(window.document.location.pathname,t.split("?")[1]),r={};return e.split("&").forEach(function(t){var e=t.split("=");r[e[0]]=e[1]}),r},buffer:function(t,e,r){clearInterval(t.timer);var a=0,o=0,l=0;t.timer=setInterval(function(){var i=!0;for(var c in e)"opacity"==c?(a=parseInt(100*parseFloat(n.getCSSAttrValue(t,c)))||100,o=parseInt(100*e[c])):"scrollTop"==c?(a=t.scrollTop,o=parseInt(e[c])):(a=parseInt(n.getCSSAttrValue(t,c))||0,o=parseInt(e[c])),l=(o-a)/20,l=o>a?Math.ceil(l):Math.floor(l),"opacity"==c?(t.style.opacity=(a+l)/100,t.style.filter="alpha(opacity: "+(a+l)+")"):"zIndex"==c?t.style[c]=e[c]:"scrollTop"==c?t.scrollTop=a+l:t.style[c]=a+l+"px",o!=a&&(i=!1);i&&(clearInterval(t.timer),r&&r())},20)},getCSSAttrValue:function(t,e){return t.currentStyle?t.currentStyle[e]:window.getComputedStyle(t,null)[e]}};r.exports=n});
define("utils/index",function(i,t,e){"use strict";var s=i("utils");e.exports=s});
define("common",function(t){"use strict";var e=t("http/api"),o=t("utils/index");layui.define(["jquery"],function(t){var n=layui.$,i={http:function(t){t=t||{};var e=t.type?n.trim(t.type.toLowerCase()):"get";n.ajax({url:t.url,type:e,data:t.data||{},contentType:"post"==e?"application/json":"",timeout:t.timeout||1e4,beforeSend:function(){"post"==e&&(t.data=JSON.stringify(t.data))},success:function(e){t.success&&t.success(e)},error:function(e){t.error&&t.error(e)},complete:function(){t.complete&&t.complete("complete")}})},api:e,utils:o};t("common",i)}),layui.config({base:"/modules/"}).extend({common:"common"})});
