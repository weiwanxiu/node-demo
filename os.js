var os = require('os');

console.log("hostname : "+os.hostname())
// hostname : weiwanxius-Mac-mini.local

console.log("platform : "+os.platform())
// platform : darwin

console.log("release : "+os.release())
// release : 16.1.0

console.log("totalmem : "+os.totalmem())
// totalmem : 8589934592

console.log("cpus : \n",os.cpus())
/*cpus :
 [ { model: 'Intel(R) Core(TM) i5-4278U CPU @ 2.60GHz',
    speed: 2600,
    times: { user: 499950, nice: 0, sys: 276390, idle: 4582060, irq: 0 } },
...
    */

console.log("networkInterfaces : \n",os.networkInterfaces())
/*networkInterfaces :
 { lo0:
   [ { address: '127.0.0.1',
       netmask: '255.0.0.0',
       family: 'IPv4',
       mac: '00:00:00:00:00:00',
       internal: true },
     { address: '::1',
       netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
       family: 'IPv6',
       mac: '00:00:00:00:00:00',
       scopeid: 0,
       internal: true },
       ...*/
