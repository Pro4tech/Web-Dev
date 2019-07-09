Variable Testing
var a;
a = 10;
a = 'hello';
a = true;

var b: number;
b = 90;
//b='hello';

//typed tuple
var mytuple: [number, string, boolean];
mytuple = [1, 'Hello', true];
console.log(mytuple);

//typed Fuctions
function add1(a, b) {
    return a + b;
}

console.log(add1('loo', 1));

//Proper Code-Function
function add2(a: number, b: number) {
    return a + b;
}

console.log(add2(7, 1));

//Optional Parameter Function-(Syntax was shown for var d)
function add3(a: number, b: number, c: string = ' ', d?: number) {
    return a + b;
}
console.log(add3(75, 1));

//Defining return type of function
function echo(name: string): string {
    return name;
}
console.log(echo('hello'));

//Function test
function calc(a: number, b?: string) {
    if (b == 'cube')
        return a * a * a;
    else
        return a * a

}
console.log('With Parameter:' + calc(3, 'cube'));
console.log('Without Parameter:' + calc(3));

##--Implicit Typing--##
var a: any; (var a = 10 - implicit example)
    a = 5;
console.log(typeof (a));

//Union Datatype-Variable with differrent datatyping simulatanously
var u: number | boolean;
u = 8;
u = true;