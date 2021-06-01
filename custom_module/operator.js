const add = (a,b)=>{ //fat arrow function
    return a+b;
}
const sub = (a,b)=>{ //fat arrow function
    return a-b;
}
const name = "Rijvi"

//exports means je keu add() access korte parbe
//just one function or variable er jonno
// module.exports = add;

//multiple function or varibnale access
module.exports.add1 = add;
module.exports.sub1 = sub;
module.exports.name = name;

//es5 er object distrcting way te aivabe likha jabe 
//module.exports = {add,sub,name}