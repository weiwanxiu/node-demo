var http = require('http')  
var fs = require('fs');  
//===========================get=============================
/*
// get 要抓取的网页地址  
var url = 'http://www.dtyunxi.com/index.html'  
  
http.get(url, function(res) {  
    var html = ''  
    res.on('data', function(data) {  
        html += data;  
    })  
    res.on('end', function() {  
        // 将抓取的内容保存到本地文件中  
        fs.writeFile('copyWeb.html', html, function(err) {  
            if (err) {  
                console.log('出现错误!')  
            }  
            console.log('网页抓取成功')  
        })  
    })  
}).on('error', function(err) {  
    console.log('错误信息：' + err)  
})  

return false;*/

/*//抓取的图片地址
var imgUrl = "http://www.dtyunxi.com/statics/images/yunxi3.0/logo.jpg";
  
http.get(imgUrl, function(res) {  
    var imgData = ''  
    res.on('data', function(data) {  
        imgData += data;  
    })  
    res.on('end', function() {  
        // 将抓取的内容保存到本地文件中  
         fs.writeFile("./images/logo.jpg", imgData, "binary", function(err){
            if (err) {  
                console.log('出现错误!')  
            }  
            console.log('图片抓取成功')  
        })  
    })  
}).on('error', function(err) {  
    console.log('错误信息：' + err)  
}) 

return false; */

//抓取的图片地址 -- get option 
var imgUrl = "http://www.dtyunxi.com/statics/images/yunxi3.0/logo.jpg";

var options = {
  host: 'www.baidu.com',
  port: 80,
  path: "/img/bd_logo1.png"
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
            console.log('图片抓取成功')  
        })  
    })  
}).on('error', function(err) {  
    console.log('错误信息：' + err)  
}) 

return false; 


//
var http = require("http");

var options = {
  host: 'www.dtyunxi.com',
  port: 80,
  path: '/statics/images/yunxi3.0/logo.jpg'
};

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);

  for(var item in res.headers) {
    console.log(item + ": " + res.headers[item]);
  }
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});


return false;

//=========================
//get 帶option

var http = require('http');
var options = {method: 'GET', host: 'stackoverflow.com', port: 80, path: '/'};
var req = http.request(options, function(res) {
    console.log(JSON.stringify(res.headers));
  }
);
req.end();

return  false;


//=========================================
//post
var http=require('http');

http.createServer(function (request, response){
}).listen(3000, '127.0.0.1');

var body = {
    "data":{
        "channel" : "aaa",
        "appkey" : "bbb"
    },
    "sign" : "22334455",
    "token" : "bb667788"
};

var bodyString = JSON.stringify(body);

var headers = {
  'Content-Type': 'application/json',
  'Content-Length': bodyString.length
};


var options = {
  host: '127.0.0.1',
  port: 3000,
  path: '/Config',
  method: 'POST',
  headers: headers
};

var req=http.request(options,function(res){
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
        responseString += data;
    });

    res.on('end', function() {
    //这里接收的参数是字符串形式,需要格式化成json格式使用
        var resultObject = JSON.parse(responseString);
        console.log('-----resBody-----',resultObject);
    });

    req.on('error', function(e) {
        // TODO: handle error.
        console.log('-----error-------',e);
    });
});
req.write(bodyString);
req.end();


