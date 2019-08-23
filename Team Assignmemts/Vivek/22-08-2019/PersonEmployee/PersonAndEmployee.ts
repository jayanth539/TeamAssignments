import IOOperations from './interface';
export class Person{
    name:string;
    age:number;
    phone:number;
    static nationality:string="Indian";
    constructor(name:string,age:number,phone:number){
        this.age=age;
        this.name=name;
        this.phone=phone;
    }

    display():void {  
        console.log("from Parent method........");
        console.log("name: " + this.name);  
        console.log("age: " + this.age); 
        console.log("phone: " + this.phone);
    }  
   
}


export class Employee extends Person implements IOOperations{
    designation:string;
    salary:number;
    
    constructor(name:string,age:number,phone:number,designation:string,salary:number){
        super(name,age,phone);
        this.designation=designation;
        this.salary=salary;
    
    }
    display():void { 
        console.log("from child method........"); 
        console.log("name: " + this.name);  
        console.log("age: " + this.age); 
        console.log("phone: " + this.phone);  
        console.log("designation: " + this.designation); 
        console.log("salary: " + this.salary);  
    
        
    }  

}