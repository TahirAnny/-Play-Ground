//value swapping

var a = 1;
var b = 2;

// [a, b] = [b, a]
[b, a] = [a, b]

console.log(a, b);

//Parsing an array returned from a function

function f() {
    return [10, 20];
  }
  
let c, d;
[c, d] = f();
console.log(c); // 10
console.log(d); // 20