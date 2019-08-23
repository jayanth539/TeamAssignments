let expr:string="2+3*5/3";
let num1array:string[]=[];
let num2array:string[]=[];
var re=/apple/gi ;
while(expr.indexOf("*")!=-1 || expr.indexOf("/")!=-1 || expr.indexOf("+")!=-1 || expr.indexOf("-")!=-1){
if(expr.indexOf("*")!=-1){
    let i:number=expr.indexOf("*");
    if(expr.charAt(i-1)!='&' || expr.charAt(i+1)!='&'){
    num1array.push(expr.charAt(i-1)+"");
    num1array.push(expr.charAt(i+1)+"");
    expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
    }
    else if(expr.charAt(i-1)=='&'){
        num1array.push(expr.charAt(i+1)+"");
        expr=expr.substring(0,i-2)+"&"+expr.substring(i+2);
        }
    else if(expr.charAt(i+1)=='&'){
        num1array.push(expr.charAt(i-1)+"");
        expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
        }
}
if(expr.indexOf("/")!=-1){
    let i:number=expr.indexOf("/");
    if(expr.charAt(i-1)!='&' || expr.charAt(i+1)!='&'){
        num1array.push(expr.charAt(i-1)+"");
        num1array.push(expr.charAt(i+1)+"");
        expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
        }
        else if(expr.charAt(i-1)=='&'){
            num1array.push(expr.charAt(i+1)+"");
            expr=expr.substring(0,i-2)+"&"+expr.substring(i+2);
            }
        else if(expr.charAt(i+1)=='&'){
            num1array.push(expr.charAt(i-1)+"");
            expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
            }
}
if(expr.indexOf("+")!=-1){
    let i:number=expr.indexOf("+");
    if(expr.charAt(i-1)!='&' || expr.charAt(i+1)!='&'){
        num2array.push(expr.charAt(i-1)+"");
        num2array.push(expr.charAt(i+1)+"");
        expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
        }
        else if(expr.charAt(i-1)=='&'){
            num2array.push(expr.charAt(i+1)+"");
            expr=expr.substring(0,i-2)+"&"+expr.substring(i+2);
            }
        else if(expr.charAt(i+1)=='&'){
            num2array.push(expr.charAt(i-1)+"");
            expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
            }
}
if(expr.indexOf("-")!=-1){
    let i:number=expr.indexOf("-");
    if(expr.charAt(i-1)!='&' || expr.charAt(i+1)!='&'){
        num2array.push(expr.charAt(i-1)+"");
        num2array.push(expr.charAt(i+1)+"");
        expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
        }
        else if(expr.charAt(i-1)=='&'){
            num2array.push(expr.charAt(i+1)+"");
            expr=expr.substring(0,i-2)+"&"+expr.substring(i+2);
            }
        else if(expr.charAt(i+1)=='&'){
            num2array.push(expr.charAt(i-1)+"");
            expr=expr.substring(0,i-1)+"&"+expr.substring(i+2);
            }
}
}
console.log(num1array);
console.log(num2array);