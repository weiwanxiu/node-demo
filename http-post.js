var http = require('http')  
var fs = require('fs');  

console.log(http.STATUS_CODES);
console.log(http.METHODS);

//抓取的图片地址
var imgUrl = "http://www.dtyunxi.com/statics/images/yunxi3.0/logo.jpg";

var postData = querystring.stringify({
    'name': 'weiwanxiu',
    'adress': 'guangzhou'
});

// 设置头部信息
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'content-length': postData.length,
    'content-type': 'text/plain',
    'connection': 'keep-alive',
    'host': 'www.dtyunxi.com',
    'accept': '*/*' ,
    'cookie':     'weiwanxiu---123456789',
}
//参数设置
var options = {
    host: 'www.dtyunxi.com',  
    port: 80,
    path: "/statics/images/yunxi3.0/logo.jpg",
    headers: headers,
    postData: postData,
    agent:false,
    keepAlive:false,
    timeout: 3000
};
  
http.get(options, function(res) {  
    var imgData = ''  
    res.on('data', function(data) {  
        imgData += data;  
    })  
    res.on('end', function() {  
        // 将抓取的内容保存到本地文件中  
         fs.writeFile("./images/logo01.jpg", imgData, "binary", function(err){
            if (err) {  
                console.log('出现错误!')  
            }  
            console.log('图片抓取成功 \n\n') 
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


