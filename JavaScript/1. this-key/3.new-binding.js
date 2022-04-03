var person = function(name, age) {
    this.name = name;
    this.age = age;
    this.personDescription = function(){
        return `${name} is a person & ${age} years old.` ;
    };
};

var soton = new person("Soton", 20);

console.log(soton.name);
console.log(soton.age);
console.log(soton.personDescription());

