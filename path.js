
var path = require("path");

// 判断是否绝对路径
console.log('isAbsolute : ' + path.isAbsolute('/Users/wwx/workspace/node-demo/path.js'));

// 获取路径中的文件夹部分
console.log('dirname : ' + path.dirname('/Users/wwx/workspace/node-demo/path.js'));

// 路径中文件的后缀名
console.log('extname : ' + path.extname('/Users/wwx/workspace/node-demo/path.js'));

// 将路径中的字符串转换为对象
console.log('parse : \n' ,path.parse('/Users/wwx/workspace/node-demo/path.js'));



// // 格式化路径
// console.log('normalization : ' + path.normalize('/Users////wwx/workspace/node-demo'));

// // 连接路径
// console.log('joint path : ' + path.join('/Users/','wwx/workspace','/node-demo'));

// // 转换为绝对路径
// console.log('resolve : ' + path.resolve('./path.js'));

