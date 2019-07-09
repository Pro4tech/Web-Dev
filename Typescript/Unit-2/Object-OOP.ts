// Basic Class Defination with Acces Modifiers
class student {
    private firstname: string;
    private lastname: string;

    constructor(fn: string, ln: string) {
        this.firstname = fn;
        this.lastname = ln;
    }


    // Getter and Setters
    getFirstName(): string {
        return this.firstname;
    }
    getLastName(): string {
        return this.lastname;
    }
    setFirstName(fn: string) {
        this.firstname = fn;
    }
    setLastName(ln: string) {
        this.lastname = ln;
    }
    getfullname(): string {
        return this.firstname + " " + this.lastname;
    }

}
/* // Shorthand Defination of class
class person{
    constructor(private firstname:string,private lastname:string)
}
//
 */ 
var stud1 = new student('Pritesh', 'Naik');
var stud2 = new student('Adgai', 'Gai');
stud1.setFirstName('Vaibhav');
console.log(stud1.getfullname());
stud2.setFirstName("Aditya");
console.log(stud2.getfullname());
stud1.setLastName('Gupta');
stud2.setLastName('Yadav');
console.log(stud1.getfullname());
console.log(stud2.getfullname());
