//create nodejs server
//req means je server ee dhukte chaibo or get current http request
//response means final result show korbe http req er
//req ki asche tar jonno listen method use hobe 
//creates a listener on the specified port or path


const fs = require("fs");
const http = require("http");






const server = http.createServer((req, res) => {

    ////read api data
        fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) => {
            console.log(data);
            console.log(err);//print null
            const objData = JSON.parse(data);
        if (req.url == "/") {
            //end method means server response jeta send hocche oita off hoia jabe 
            res.end('hello from the other side');
        } else if (req.url == '/about') {
            //another way
            res.write('hello from the Bangladesh');
            res.end();

        } else if (req.url == "/userapi") {
            //writeHead always need for browser network menu 
            res.writeHead(200, { "Content-type": "application/json" })
            //can not access full object data of array in server just access field of array data in server
            res.end(objData[1].message);


        } else {
            res.writeHead(404, { "Content-type": "text/html" });
            res.end("<h1>404 page does not exit</h1>")
        }
    })
});


server.listen(4000, "127.0.0.1", () => {
    console.log('that is listining the port number');

});