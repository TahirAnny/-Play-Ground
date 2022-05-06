var user = {
    id: 1,
    name: 'Soton',
    type: 'Senior high schooler',
    age: 20
}

/*
How To Destructure

** For accessing simple object:
    * take a empty object {}, left side keep the empty object and right side keep the main object
        e,g: { } = user;
    * give them a type, such as -> const  { } = user;
    * write the property name inside the curly brace that you want to access, such as -> const { name } = user;
      now you can access user name by calling only name property.
    * We can also give it a alias using colon( : ), like -> const { name : title } = user;
*/

const { name : title } = user;
console.log( title );

//more complex object
var user = {
    id: 1,
    name: 'Soton',
    type: 'Senior high schooler',
    age: 20,
    education: {
        certificate1: 'S.S.C'
    }
}

/*
How To Destructure

** For accessing complex object
    * We will follow first two step from above
    * then we will have to identify the parent node of the child object. 
      For example, if I want to access certificate1, then I will have to identify it's parent first, which is *education* 
      in this case. So we can do like below:
      const { education } = user;
    * then we will have to access the desired property
      const { education : { certificate1 } } = user;
    * we can use alias here as well using colon ( : )
       const { education : { certificate1 : schoolCertificate } } = user;
*/


const { education : { certificate1 } } = user;
console.log(certificate1)

const { education : { certificate1 : schoolCertificate } } = user;
console.log(schoolCertificate)

//more complex object
var user = {
    id: 1,
    name: 'Soton',
    type: 'Senior high schooler',
    age: 20,
    education: {
        certificate1: {
            name: 'S.S.C',
            passingYear: '2018',
            result: '5.00'
        }
    }
}

const { name: studentName, education : { certificate1 : { name : examName, passingYear, result } } } = user;
console.log(`${studentName} got GPA ${result} in ${examName} exam, Year ${passingYear}`)

//Set default value of a destructured property

const { educations : { certificate } = { } } = user;
console.log(certificate) // if the property does not exist it will return undefined