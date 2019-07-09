"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var Student = /** @class */ (function () {
    function Student(firstname, lastname, rollno, Address, marks) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.rollno = rollno;
        this.Address = Address;
        this.marks = marks;
    }
    Student.prototype.avg = function () {
        var i;
        var sum = 0;
        var avg;
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        avg = sum / this.marks.length;
        if (avg < 13) {
            console.log("FAils");
        }
        else {
            console.log('Passes');
        }
        return avg;
    };
    Student.prototype.getFirstName = function () {
        return this.firstname;
    };
    Student.prototype.getLastName = function () {
        return this.lastname;
    };
    Student.prototype.setFirstName = function (fn) {
        this.firstname = fn;
    };
    Student.prototype.setLastName = function (ln) {
        this.lastname = ln;
    };
    Student.prototype.getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    return Student;
}());
var addresstemp = new address_1.Address('Goa', 'India');
var stud = new Student('Pritesh', 'Naik', 8125, addresstemp, [25, 24, 26, 25, 24]);
console.log(stud);
console.log('Avg:' + stud.avg());
