var os = require("os"); // os is a core node package
console.log("Free memory at this point on your system is -- "+Math.ceil(os.freemem()/(1024*1024))+" MB");

var moment = require("moment"); // moment is a third party package that is downloaded using npm install moment

var math = require('./math');
console.log(math.sum(1,2,3,4));

