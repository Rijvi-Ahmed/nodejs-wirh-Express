const os = require("os");

//32 bir or 64 bit
console.log(os.arch());

const freememory = os.freemem();
//console.log(freememory);
console.log(`${freememory / 1024 / 1024 / 1024 }`);

const totalmem = os.totalmem();
//console.log(freememory);
console.log(`${totalmem / 1024 / 1024 / 1024 }`);


