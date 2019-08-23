"use strict";
exports.__esModule = true;
var PersonAndEmployee_1 = require("./PersonAndEmployee");
var obj = new PersonAndEmployee_1.Employee("vivek", 22, 9030222292, "SD", 50000);
obj.display();
var obj1 = new PersonAndEmployee_1.Person("vivek", 22, 9030222292);
obj1.display();
console.log(PersonAndEmployee_1.Person.nationality);
