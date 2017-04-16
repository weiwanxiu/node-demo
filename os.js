var os = require('os');
console.log("hostname : "+os.hostname())
console.log("platform : "+os.platform())
console.log("release : "+os.release())
console.log("totalmem : "+os.totalmem())
console.log("cpus : \n",os.cpus())
console.log("networkInterfaces : \n",os.networkInterfaces())