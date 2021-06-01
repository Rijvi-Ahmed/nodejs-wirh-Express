const fs = require("fs");
 const bioData = {
     name: "Rijvi",
     age: 26,
     gender: "male"
 };


 //convert  js object data to json format
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
//{"name":"Rijvi","age":26,"gender":"male"}

// //convert hjson to js object data
// const objData = JSON.parse(jsonData);
// console.log(objData);
// //its work
// console.log(objData.age);
//  //{ name: 'Rijvi', age: 26, gender: 'male' }


//write
 fs.writeFile('json1.json',jsonData,(err)=>{
    console.log('done');
    
});


//read
fs.readFile("json1.json","utf-8",(err,data)=>{
    console.log(data);
    const objData = JSON.parse(data);
    console.log(objData);
    

    
});