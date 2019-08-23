var ternary_operator = /** @class */ (function () {
    function ternary_operator() {
    }
    ternary_operator.prototype.condition = function () {
        var first = 5;
        var second = 3;
        var result = (first > second) ? "That is true : 5>3" : "That is false : 5<3";
        console.log(result);
    };
    return ternary_operator;
}());
var obj = new ternary_operator();
obj.condition();
