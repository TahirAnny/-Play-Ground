let arr1 = [1, 2, 3, 4];

var [a, b] =  arr1;
console.log(a, b);

var [, a, , b] =  arr1; //for skipping a value
console.log(a, b);

//Ignoring some returned values

var arr2 = [1, 2, [3, 6, 7], 4];

var [, , [, ,a, b]] =  arr2;
console.log(a, b);

// Assigning the rest of an array to a variable

var [a, b, ...others] = arr2;
var [c, d] = others;
console.log(c, d)

//Default values

let num1, num2;

[num1 = 5, num2] = [1];
console.log(num1); // 1
console.log(num2); // 7

[num1 = 5, num2 = 7] = [1]; //setting default value for undefined property
console.log(num1); // 1
console.log(num2); // 7 
