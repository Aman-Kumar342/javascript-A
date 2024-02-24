/* for primitive(string number bool null undefined etc...) type we use stack memory only 
stack(primitive)

heap(non-primitive)

*/
let  myname ="aman"
let anothername=myname
anothername="savarnya"

console.log(myname);
console.log(anothername);
let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1
user2.email="aman@amazon.com"
console.log(user1.email);
console.log(user2.email)