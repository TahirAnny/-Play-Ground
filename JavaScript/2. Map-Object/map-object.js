/*
    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, undefined if the key doesn’t exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the value by the key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.
    map.entries() – returns a new Iterator object that contains an array of [key, value] 
                for each element in the map object. The order of objects in the map is the same as the insertion order.
    forEach(callback[, thisArg]) – invokes a callback for each key-value pair in the map in the insertion order. The optional thisArg parameter sets the this value for each callback.
    map.keys() – returns a new Iterator that contains the keys for elements in insertion order.
    map.values() returns a new iterator object that contains values for each element in insertion order.
 */

var myMap = new Map();

var keyObj = {},
    keyFunc = function () { return 'hey'},
    keyString = "a string";

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

// Iterate over map elements

for(let entry of myMap.entries()) {
    console.log(entry); 
 }
 
 //OR
 
 for(let entry of myMap){
    console.log(entry); 
 }

 // To make the iteration more natural, destructuring can be used
 
 for (let [key, value] of myMap.entries()) {
    console.log(`${key} : ${value}`);
  }

// Iterate over map keys

for(let entry of myMap.keys()) {
    console.log(entry); 
 }

 // Iterate over map values

for(let entry of myMap.values()) {
    console.log(entry); 
 }


 /*
 https://dev.to/faisalpathan/why-to-use-map-over-object-in-js-306m
 */