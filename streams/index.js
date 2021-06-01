const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{

    //data access korar simple way. aksate sob data show korbe
    // fs.readFile('input.txt',(err,data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString())
        
    // })


    //streams way
    //data is event of stream where it fires when there is data availabe ton read
    //end is event of streams where it fires when there is no more data to read
    //error is event of streams where it fires when some error occours
    //finish is event of streams where it fires when permanently delete data to show server

    
    const rstream = fs.createReadStream("input.txt");
    // rstream.on('data', (storedata)=>{
    //     res.write(storedata);
    // });
    // rstream.on('end',()=>{
    //     res.end();
    // });
    // rstream.on('error',(err)=>{
    //     console.log(err);
    //     res.end('file no found')
        
    // });
    

    //2nd way of stream
    rstream.pipe(res);

});
server.listen(5000,"127.0.0.1");