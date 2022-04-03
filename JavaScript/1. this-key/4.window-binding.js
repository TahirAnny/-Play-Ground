/*
    If the this keyword is not resolved with any of the bindings, implicit, explicit or new, 
    then the this is bound to the window(global) object.
*/

let personName = function() {
    console.log(this.name);
};

global.name = 'Soton'; //In a browser it is named window, for Node.js it is global
personName();

/*
    NOTE: JavaScript strict mode does not allow this default binding.
*/

"use strict";
function myFunction() {
  return this;
}