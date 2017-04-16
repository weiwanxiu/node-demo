var EventEmitter = require('events').EventEmitter;  //构造函数
var myEmitter = new EventEmitter(); //生成事件发生器的实例,也就是消息中心

myEmitter.on('someEvent', function () {  //on 用来监听事件,指定回调函数
  console.log('event has occured');
});

function myEvent() {
  console.log('start');
  myEmitter.emit('someEvent');  //emit 用来发出事件，触发事件
  console.log('end');
}

myEvent()