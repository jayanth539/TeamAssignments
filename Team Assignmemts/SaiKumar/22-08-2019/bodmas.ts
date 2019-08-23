var pref= {
    "+" : 1,
    "-" : 1,
    "*" : 2,
    "/" : 2,
    "^" : 3
 }
 let preference:string[]=["*","/","+","-"];
let s:string="3+4*2/4-8";
//let s:string="3+4*2";
let firarr:string="";
let secarr:string="";
let obj={};
let str:string="";
let i=0;
let b:string="";

for(let j=0;j<preference.length;j++){
for(i=0;i<=s.length-1;i++){
    if(s[i]==preference[j]){
        if(str==""){
            if(s[i]=="*"||s[i]=="/"){
                firarr+=s[i-1]+",";
                firarr+=s[i+1]+",";
            }
            if(s[i]=="+"||s[i]=="-"){
                      secarr+=s[i-1]+",";
                 secarr+=s[i+1]+",";
            }
            str+=s[i-1]+s[i]+s[i+1];
            if(s[i+2]!=null)
            s=s.substring(0,i-1)+"&"+s.substring(i+2);
            else
            s=s.substring(0,i-1)+"&";
            j=0;
        }
        else{
            if(s[i]=="*"||s[i]=="/"){
                
                if(s[i-1]!="&")
                firarr+=s[i-1]+",";
                else
                firarr+=s[i+1]+",";
            }
            if(s[i]=="+"||s[i]=="-"){
                if(s[i-1]!="&")
                      secarr+=s[i-1]+",";
                else
                 secarr+=s[i+1]+",";
            }
            if(s[i+1]=="&"){
                    str+=s[i]+s[i-1];
                    s=s.substring(0,i-1)+"&"+s.substring(i+1);
            }
            else if(s[i-1]=="&"){
                    str+=s[i]+s[i+1];
                    if(s[i+2]!=null)
                    s=s.substring(0,i)+"&"+s.substring(i+2);
                    else
                    s=s.substring(0,i)+"&";
            }
        }
    }
  }
}
firarr=firarr.substring(0,firarr.length-1);
secarr=secarr.substring(0,secarr.length-1);
// console.log(firarr);
// console.log(secarr);
//console.log(str);
if(firarr!="" && secarr!=""){
    console.log("("+firarr+")"+"=>"+"("+secarr+")"+"=>("+str+")");
}
