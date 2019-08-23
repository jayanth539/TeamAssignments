"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age, phone) {
        this.age = age;
        this.name = name;
        this.phone = phone;
    }
    Person.prototype.display = function () {
        console.log("from Parent method........");
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("phone: " + this.phone);
    };
    Person.nationality = "Indian";
    return Person;
}());
exports.Person = Person;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, designation, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.designation = designation;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("from child method........");
        console.log("name: " + this.name);
        console.log("age: " + this.age);
        console.log("phone: " + this.phone);
        console.log("designation: " + this.designation);
        console.log("salary: " + this.salary);
    };
    return Employee;
}(Person));
exports.Employee = Employee;
