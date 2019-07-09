import {Address} from './address'

class Student {
    constructor(private firstname:string,private lastname:string,private rollno:number,private Address:Address,private marks:number[]){}
    avg():number {
        let i: number;
        let sum = 0;
        let avg:number
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        avg=sum/this.marks.length;
        if(avg<13){
            console.log("FAils")
        }
        else{
            console.log('Passes')
        }
        return avg;
    }
    getFirstName(): string {
        return this.firstname;
    }
    getLastName(): string {
        return this.lastname;
    }
    setFirstName(fn:string) {
        this.firstname = fn;
    }
    setLastName(ln:string) {
        this.lastname = ln;
    }
    getfullname():string {
        return this.firstname + " " + this.lastname;
    }
}
let addresstemp=new Address('Goa','India'); 
let stud =new Student('Pritesh','Naik',8125,addresstemp,[25,24,26,25,24]);
console.log(stud);
console.log('Avg:'+stud.avg());