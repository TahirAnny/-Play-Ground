/*
    .call() - invoke the function immediately, and modify the context.
            - allows to pass in arguments one by one.
*/

var personDescription = function(address, school){
    console.log(`${this.name} is ${this.age} years old! Lives in ${address} and studies in ${school}.`)
}

var soton = {
    name: 'Soton',
    age: 20
}

personDescription.call(soton, 'Dhaka', 'RUMC');

/*
    .apply() - invoke the function immediately, and modify the context.
             - allows to pass in arguments as an array.
*/

var personDescription = function(address, school){
    console.log(`${this.name} is ${this.age} years old! Lives in ${address} and studies in ${school}.`)
}

var soton = {
    name: 'Soton',
    age: 20
}

var otherDetails = ['Dhaka', 'RUMC'];

personDescription.apply(soton, otherDetails);


/*
    .bind() - function to be called later with a certain context, useful in events. 
            - returns a new function, allowing to pass in a this array and any number of arguments.
*/

var personDescription = function(){
    console.log(`${this.name} is ${this.age} years old! Lives in ${this.address} and studies in ${this.school}.`)
}

var soton = {
    name: 'Soton',
    age: 20,
    address: 'Dhaka',
    school: 'Rumc'
}

var data = personDescription.bind(soton);
data();
