export class address {
    constructor(state:string,Country:string);
    
}
export class Student {
    constructor(private firstname:string,private lastname:string,private rollno:number)
    marks: number[];
    Adress:address();
    avg():number {
        let i: number;
        let sum = 0;
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        return (sum/this.marks.length);
    }
}
let stud = new Student('Pritesh','Naik',8125,'Goa','India');
// let add =new address();
stud.marks = [25, 26, 24, 23, 21, 25];
let Avg= stud.avg();
console.log('the Avg is:'+Avg);
console.log('the state is '+stud.state ,'The Contry is'+add.Country);
console.log(stud);