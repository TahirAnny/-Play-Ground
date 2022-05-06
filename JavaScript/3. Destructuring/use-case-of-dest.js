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

//Combined Array and Object Destructuring

const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  
  const [,, { name : propName }] = props;
  
  console.log(propName); // "FizzBuzz"

// **Source: [Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)