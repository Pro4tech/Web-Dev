// Arrow function defination
var f1 = function () { return "hi"; };
var f2 = function () { console.log("I'm f2"), console.log("2nd Comment"); };
var f3 = function (name) { console.log('Nice to meet u ' + name), console.log('Bye ' + name); };
var f4 = function (a, b) { return Number(a) + Number(b); };
// Function Calling
console.log(f1());
f2();
f3("Pritesh");
console.log(f4(3, '5'));
