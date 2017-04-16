var http = require('http')  
var fs = require('fs');  
  
// 要抓取的网页地址  
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


//抓取的图片地址
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



