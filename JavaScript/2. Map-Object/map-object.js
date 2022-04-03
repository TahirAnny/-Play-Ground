var myMap = new Map();

var keyObj = {},
    keyFunc = function () { return 'hey'},
    keyString = "a string";

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

for(let entry of myMap.entries()) {
    console.log(entry); 
 }
 
 //OR
 
 for(let entry of myMap){
    console.log(entry); 
 }