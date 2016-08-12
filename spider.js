/**
 * Created by Administrator on 2016/8/12.
 */

var Nightmare = require('nightmare');
var screenshotPlug=require("nightmare-screenshot");

var nightmare = new Nightmare({show: false,height:8000});

var baiduNews = "http://m.news.baidu.com/news#/?_k=tivwq7";
var mobileAgent = "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1";
nightmare.viewport(500, 5000)
    .useragent(mobileAgent)
    .goto(baiduNews).evaluate(function (selector) {
     return document.querySelector("ss")
})
    .wait(".newslist-container")
    .use(screenshotPlug.screenshotSelector("e:/baidu.png","body"))
    .run(function () {
        console.log("ok");
    });
