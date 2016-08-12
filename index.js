/**
 * Created by Administrator on 2016/8/12.
 */
var helper=require("./helper");
var Nightmare = require('nightmare');
var models=require("./models");
var nightmare = Nightmare({ show: false })

nightmare.goto("http://www.qq.com/").evaluate(function (selector) {
    return document.querySelectorAll("a").length;
}).then(function (result) {
    console.log(result);
    
});
// //
// models.link_store.create({
//     link_url: "http://",
//     title: "ssTitle",
//     html_content: "content",
//     category_id: "0",
//     category_name: "QQ"
// }).then(function () {
// });

models.link_store.findOne({where:{link_url:"http://ss"}}).then(function (linkstore) {
    console.log(JSON.stringify(linkstore));
});

console.log(models)