class ternary_operator  
{  
    condition()  
    {  
        var first = 5;  
        var second = 3;  
        var result = (first > second) ? "That is true : 5>3" : "That is false : 5<3";  
        console.log(result);  
    }  
}  

var obj = new ternary_operator();  
obj.condition();