define("website/js/a",function(){"use strict";console.log("a"),layui.use(["jquery","layer","form"],function(){var e=layui.layer,o=layui.$,i=layui.form;o("#a").css({color:"blue"}),e.msg("Hello World"),i.on("submit(formDemo)",function(o){return e.msg(JSON.stringify(o.field)),!1})})});