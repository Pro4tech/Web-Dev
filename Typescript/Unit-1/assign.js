var address = /** @class */ (function () {
    function address() {
    }
    return address;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.sum = function () {
        var i;
        var sum = 0;
        for (i = 0; i < this.marks.length; i++) {
            sum += this.marks[i];
        }
        return sum;
    };
    return Student;
}());
var stud = new Student();
stud.firstName = 'Pritesh';
stud.lastName = 'Naik';
var add = new address();
add.state = 'Goa';
add.Country = 'India';
stud.marks = [25, 26, 24, 23, 21, 25];
var Sum = stud.sum();
console.log('the sum is ' + Sum);
console.log('the state is ' + add.state, 'The Contry is' + add.Country);
