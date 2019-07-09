/* // Inheritance and Polymorphism Example
class person{
    constructor(private FirstName:string,private LastName:string){}
    greet(){
        console.log("Hello There");
    }
    GetName(){
        return this.FirstName+this.LastName;
    }
}

class program extends person{
    constructor(fn:string ,ln:string){
        super(fn,ln);
    }
    greet(){
        console.log('Hello World');
    }
    greetnormie(){
        super.greet();
    }
}

var p1= new program('Ravi','Yadav');
var p2= new person('Ravi','Yadav');
var p3:person=new program('Ravi','Yadav');
p1.greet();
p1.greetnormie();
console.log(p1);
console.log(p2);
console.log(p3);
 */
// Generics-Used when Uncertain of Input and Output but define at run-time //

/*  Incorrect defination
    function echo(arg){
    return arg
} */

function echo <t>(arg:t):t{
    return arg
}
var op=echo<number>(52);
    console.log(op);
var op1=echo<string>("hello");
    console.log(op1);
var op2=echo<boolean>(true);
    console.log(op2);

