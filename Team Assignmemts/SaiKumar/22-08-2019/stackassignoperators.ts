var pref= {
    "+" : 1,
    "-" : 1,
    "*" : 2,
    "/" : 2,
    "^" : 3
 }
 //console.log(pref["*"]);
let numarray:number[]=[];
let strarray:string[]=[];
let expr:string="3*2+5-154";
let value:number=0;
for(let i=0;i<expr.length;i++){
    if(expr[i]=='+' || expr[i]=='-' || expr[i]=='*' || expr[i]=='/' ) {
        if(strarray.length==0)
            strarray.push(expr[i]);
        else if(pref[strarray[strarray.length-1]] <= pref[expr[i]])
             strarray.push(expr[i]);
        else if(pref[strarray[strarray.length-1]] > pref[expr[i]]){
            while(strarray.length>0 && pref[strarray[strarray.length-1]] >= pref[expr[i]]){
            let a=numarray.pop();
            let b=numarray.pop();
            let oper=strarray.pop();
            switch(oper){
                case "*":{numarray.push(a*b);break;}
                case "/":{numarray.push(b/a);break;}
                case "+":{numarray.push(a+b);break;}
                case "-":{numarray.push(b-a);break;}
            }
          }
          strarray.push(expr[i]);
        }
        else{
            while(strarray.length>0){
                let a=numarray.pop();
                let b=numarray.pop();
                let oper=strarray.pop();
                switch(oper){
                    case "*":{numarray.push(a*b);break;}
                    case "/":{numarray.push(b/a);break;}
                    case "+":{numarray.push(a+b);break;}
                    case "-":{numarray.push(b-a);break;}
                }
            }
        }
    }
    else {
        let stri:string="";
        let k=i;
        while(k<expr.length && expr[k]!='+' && expr[k]!='-' && expr[k]!='*' && expr[k]!='/') {
            stri+=expr[k];k++;
        }
        let x:number=parseInt(stri);
        numarray.push(x);
        if(stri.length>1)
            i+=stri.length-1;
    }
    // console.log(numarray);
    // console.log(strarray);
}
if(strarray.length!=0){
    while(strarray.length>0){
        let a=numarray.pop();
        let b=numarray.pop();
        let oper=strarray.pop();
        switch(oper){
            case "*":{numarray.push(a*b);break;}
            case "/":{numarray.push(b/a);break;}
            case "+":{numarray.push(a+b);break;}
            case "-":{numarray.push(b-a);break;}
        }
        // console.log(numarray);
        // console.log(strarray);
    }
}
console.log(numarray);