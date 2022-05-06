//Spread operator -> Expand array or object
//Rest Operator -> To get all the parameters or rest of the parameters

var arr = [1, 2, 3];
var arr1 = [...arr, 4, 5, 6];
console.log(arr1);

//Apply for new operator

let dateFields = [1970, 0, 1];  // 1 Jan 1970
let d = new Date(...dateFields);

console.log(d)

// Function

function sum(x, y, z) {
    return x + y + z;
  }

const numbers = [1, 2, 3];
console.log(sum(...numbers));
 



