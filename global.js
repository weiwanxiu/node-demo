
// 文件当前路径
console.log("__filename : "+__filename)

// setTimeout、setTimeout
var time01=null;
time01 && clearTimeout(time01);
var time01=setTimeout(function(){
	console.log("setTimeout : 1000")
},1000)


// setInterval 、 setInterval
var count=0
var time02=null;
time01 && clearInterval(time02);
var time02=setInterval(function(){
	count++;
	console.log("setInterval : 1000"+count)
	count>2 && clearInterval(time02);
},1000)

//console
console.log("log")

console.error("err")

console.dir("dir")

//process
var process=require("process")
console.log(process)