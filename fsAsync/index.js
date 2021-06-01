const fs = require("fs");

// //write file
fs.writeFile("read.txt","today is awesome day",
    (err)=>{
        console.log("file is created");
        console.log(err);
});

// //read data
// fs.readFile("read.txt","UTF-8", (err,data)=>{
//    console.log(data);
//    console.log(err);
   
// });

//delete file
// fs.unlink("read.txt",(err)=>{
//     console.log('file is deleted');
//     console.log(err);
// });