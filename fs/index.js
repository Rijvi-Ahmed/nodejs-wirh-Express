const fs = require("fs");

//create new file and if file present data are overwrite
//fs.writeFileSync('read.txt',"Rijvi Ahmed");
//fs.writeFileSync('read.txt',"Rijvi Ahmed Akash");

//add text value to existing file
//fs.appendFileSync('read.txt'," He is a good boy");

//create folder
//fs.mkdirSync('folder_name');

//read data 
// const data = fs.readFileSync('read.txt');
// console.log(data);

//data get in buffer mood
//<Buffer 52 69 6a 76 69 20 41 68 6d 65 64 20 41 6b 61 73 68 48 65 20 69 73 20 61 20 67 6f 6f 64 20 62 6f 
//79>
//node js have additional buffer data type 

//to get original data
//fs.readFileSync('read.txt', "utf8");
//another way
//org_data = data.toString();
//console.log(org_data);

//delete file
//fs.unlinkSync("read.txt");

//delete folder
//fs.rmdirSync("folder_name");
