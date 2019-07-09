"use strict";
exports.__esModule = true;
var address_1 = require("./address");
var enum_1 = require("./enum");
var Student = /** @class */ (function () {
    function Student(firstname, lastname, rollno, Address, marks) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.rollno = rollno;
        this.Address = Address;
        this.marks = marks;
    }
    Student.prototype.avg = function () {
        var i, avg, sum = 0;
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        avg = sum / this.marks.length;
        if (avg < 13) {
            this.grade = enum_1.ADV.E;
            console.log("Fails");
        }
        else {
            this.grade = enum_1.ADV.A;
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
    Student.prototype.setfirstName = function (fn) {
        this.firstname = fn;
    };
    Student.prototype.SetLastame = function (ln) {
        this.lastname = ln;
    };
    Student.prototype.Getfullname = function () {
        return this.firstname + " " + this.lastname;
    };
    Student.prototype.Giveadvice = function () {
        if (this.grade == enum_1.ADV.E) {
            return "Fail";
        }
        else {
            return 'Pass';
        }
    };
    return Student;
}());
var addresstemp = new address_1.Address('Goa', 'India');
var stud = new Student('Pritesh', 'Naik', 8125, addresstemp, [25, 24, 26, 25, 24]);
console.log(stud);
console.log('Avg:' + stud.avg());
console.log(stud.Giveadvice);
