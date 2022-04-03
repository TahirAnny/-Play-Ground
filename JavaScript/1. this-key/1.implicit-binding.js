// implicit binding

//----------------------------------------------------------------------------------------
//Scenario 01
//----------------------------------------------------------------------------------------

var soton = {
    name: 'Soton',
    type: 'Senior high schooler',
    age: 20,
    printPersonName: function(){
        console.log(`Result from scenario #1`);
        console.log(`${this.name} is a ${this.type} & ${this.age} years old.`);
    }
}

soton.printPersonName();

//----------------------------------------------------------------------------------------
//Scenario 02
//----------------------------------------------------------------------------------------

var printPersonNameFunction = function(obj){
    obj.printPersonName = function(){
        console.log(`Result from scenario #2 for ${this.name}`);
        console.log(`${this.name} is a ${this.type} & ${this.age} years old.`);
    }
}

var soton = {
    name: 'Soton',
    type: 'Senior high schooler',
    age: 20
}

var nidra = {
    name: 'Nidra',
    type: 'Junior high schooler',
    age: 10
}

printPersonNameFunction(soton);
printPersonNameFunction(nidra);

soton.printPersonName();
nidra.printPersonName();

//----------------------------------------------------------------------------------------
//Scenario 03
//----------------------------------------------------------------------------------------

var person = function(name, age) {
    return{
        name: name,
        age: age,
        personDescription: function(){
            console.log(`Result from scenario #3 (a)`);
            console.log(`${this.name} is a person & ${this.age} years old.`);
        },
        father: {
            name: "Mr ABC",
            personDescription: function(){
                console.log(`Result from scenario #3 (b)`);
                console.log(this.name);
            }
        }
    };
};

var soton = person("Soton", 20);
soton.personDescription();
soton.father.personDescription();

/*
    Rule for implicit binding

    0. Identify the function                                 -- personDescription 
    1. From where the function is being called?              -- soton.father.personDescription()
    2. Which object is actually calling the function?        -- father

 */