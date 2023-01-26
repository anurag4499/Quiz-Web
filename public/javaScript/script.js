// const result = require("./algebra")

//   console.log("It is result "+result)
function test(){
    var name=document.querySelector("#username").value
    var email=document.querySelector("#email").value
    var contact=document.querySelector("#contact").value
  
    var user=localStorage.setItem("name",name);
    var em=localStorage.setItem("email",email);
    var con=localStorage.setItem("contact",contact);
}
let value1 = localStorage.getItem('name');
let value2 = localStorage.getItem('email');
let value3 = localStorage.getItem('contact');
 

// let n=document.getElementById("name").innerHTML=value1;
// let e=document.getElementById("email").innerHTML=value2;
// let c=document.getElementById("contact").innerHTML=value3;




