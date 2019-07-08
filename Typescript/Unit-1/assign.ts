class address {
    state: string;
    Country: string;
}
class Student {
    firstName:string;
    lastName:string;
    marks: number[];
    sum() {
        let i: number;
        let sum = 0;
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        return sum;
    }
    rollno: 8125;
}
let stud = new Student();
stud.firstName = 'Pritesh';
stud.lastName = 'Naik';
let add =new address();
add.state = 'Goa';
add.Country = 'India';
stud.marks = [25, 26, 24, 23, 21, 25];
let Sum= stud.sum();
console.log('the sum is '+Sum);
console.log('the state is '+add.state ,'The Contry is'+add.Country);