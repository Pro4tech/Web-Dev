// Basic Class Defination with Acces Modifiers
var student = /** @class */ (function () {
    function student(fn, ln) {
        this.firstname = fn;
        this.lastname = ln;
    }
    // Getter and Setters
    student.prototype.getFirstName = function () {
        return this.firstname;
    };
    student.prototype.getLastName = function () {
        return this.lastname;
    };
    student.prototype.setFirstName = function (fn) {
        this.firstname = fn;
    };
    student.prototype.setLastName = function (ln) {
        this.lastname = ln;
    };
    student.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return student;
}());
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
