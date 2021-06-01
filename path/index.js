const path = require("path");

console.log(path.dirname('C:\Users\BS451\Music\MERN Developers\node js application\nodejs with express\path.js'));
console.log(path.extname('C:\Users\BS451\Music\MERN Developers\node js application\nodejs with express\path.js'));
console.log(path.basename('C:\Users\BS451\Music\MERN Developers\node js application\nodejs with express\path.js'));

const mypath =  path.parse('C:\Users\BS451\Music\MERN Developers\node js application\nodejs with express\path.js');
console.log(mypath.name);
