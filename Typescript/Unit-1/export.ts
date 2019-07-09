import { Address } from './enum'
import { ADV } from './enum'

class Student {
    grade: ADV;
    constructor(private firstname: string, private lastname: string, private rollno: number, private Address: Address, private marks: number[]) { }
    avg(): number {
        let i: number, avg: number, sum = 0;
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        avg = sum / this.marks.length;
        if (avg < 13) {
            this.grade = ADV.E;
            console.log("Fails");
        }
        else {
            this.grade = ADV.A;
            console.log('Passes');
        }
        return avg;
    }
    getFirstName(): string {
        return this.firstname;
    }
    getLastName(): string {
        return this.lastname;
    }
    setfirstName(fn: string) {
        this.firstname = fn;
    }
    SetLastame(ln: string) {
        this.lastname = ln;
    }
    Getfullname(): string {
        return this.firstname + " " + this.lastname;
    }
    Giveadvice(): string {
        if (this.grade == ADV.E) {
            return "Fail"
        }
        else { return 'Pass'; }
    }
}

let addresstemp = new Address('Goa', 'India');
let stud = new Student('Pritesh', 'Naik', 8125, addresstemp, [25, 24, 26, 25, 24]);
console.log(stud);
console.log('Avg:' + stud.avg());
console.log(stud.Giveadvice());