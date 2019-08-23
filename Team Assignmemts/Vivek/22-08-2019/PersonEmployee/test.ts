import {Person,Employee} from './PersonAndEmployee';
import IOOperations from './interface';

let obj = new Employee("vivek",22,9030222292,"SD",50000);  
obj.display();  
let obj1 = new Person("vivek",22,9030222292);  
obj1.display(); 
console.log(Person.nationality);
