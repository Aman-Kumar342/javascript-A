/*
two types of data types in javascript
1. primitive
it contain 7: types of data types
string,number,boolean,null,undefined,symbol,bigint
these all are call by value 

2. non primittive data types
it is call  by refrences 
array,object,functions
*/
const score=100
const scorevalue=100.3
const isloggedIn =false
const outtemperature=null
let useremail;

const id=symbol('123')
const anotherid=symbol('123')

console.log(id==anotherid);

const heroes=["shaktiman","nagaraj","doga"]
let myObj={
    name:"aman",
    age:20,
}
const myfunc=function (){
    console.log("hello world");
}
console.log(typeof myfunc)
