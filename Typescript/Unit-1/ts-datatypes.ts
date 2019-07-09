// Arrow function defination
var f1=()=>"hi";
var f2=()=>{console.log("I'm f2"),console.log("2nd Comment")};
var f3=(name)=>{console.log('Nice to meet u '+name),console.log('Bye '+name)};
var f4=(a,b)=>Number(a)+Number(b);
// Function Calling
console.log(f1());
f2();
f3("Pritesh");
console.log(f4(3,'5'));