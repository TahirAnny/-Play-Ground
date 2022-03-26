// implicit binding

var person = function(name, age) {
    return{
        name: name,
        age: age,
        personDescription: function(){
            console.log(`${this.name} is a person & ${this.age} years old.`);
        },
        father: {
            name: "Mr ABC",
            personDescription: function(){
                console.log(this.name);
            }
        }
    };
};

var soton = person("Soton", 20);
//soton.personDescription();
soton.father.personDescription();

/*
    Rule for implicit binding

    0. Identify the function                            -- personDescription 
    1. Where the function is being called?              -- soton.father.personDescription()
    2. Which object is actually calling the function?   -- father

 */