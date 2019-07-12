//Interface:Function Body for UnPrepared Data Flow //
interface Person1 {
    firstName: string;
    lastName: string;

    getFullName(): string //write only datatype
}

//Classes can implement the interface method //
class admin implements Person1 {
    firstName: string;
    lastName: string;

    constructor(fn: string, ln: string) {
        this.firstName = fn;
        this.lastName = ln;
    }

    getFullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

var ad1 = new admin('Protech', 'Dev');
console.log('The input Data:' + ad1.getFullName())