var http = require('http')  
var fs = require('fs');  
var querystring = require('querystring');  

// console.log(http.STATUS_CODES);
// console.log(http.METHODS);

//抓取的图片地址
var imgUrl = "http://www.dtyunxi.com/statics/images/yunxi3.0/logo.jpg";

//数据
var param = querystring.stringify({
    'name': 'weiwanxiu',
    'adress': 'guangzhou'
});

// 设置头部信息
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'content-type': 'text/plain',
    'connection': 'keep-alive',
    'accept': '*/*' ,
    'cookie':     'weiwanxiu---123456789',
}

//参数设置
var options = {
    protocol:"http:",
    host:"www.dtyunxi.com",  
    port: "",
    path: "/index.html",
    headers: headers,
    // method: "GET",   //由于大多数 GET 请求都没有内容，Node.js 提供了这个便捷方法。该方法与 http.request() 的唯一区别是它设置该方法为 GET 并自动调用 req.end()
    agent:false,
    keepAlive:false,
    timeout: 3000
};
  
var req=http.get( options, function(res) {  
 
    var html = ''  
    res.on('data', function(data) {  
        html += data;  
    })  
    res.on('end', function() {  
        // 将抓取的内容保存到本地文件中  
        fs.writeFile('./copyWeb02.html', html, function(err) {  
            if (err) {  
                console.log('出现错误!')  
            }  
            console.log('网页抓取成功\n\n') 
            // console.log(res.req); 
            console.log("_header: \n ",res.req._headers); 
            console.log("statusCode: "+res.statusCode); 
            console.log("timeout: "+res.req.timeout);  
        })  
    })  
}).on('error', function(err) {  
    console.log('错误信息：' + err)  
}) 

return false;


