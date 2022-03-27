var person = {
    firstName: 'Isaac',
    lastName: 'Rabin',
    fullName: function(obj){
        return `${this.firstName} ${this.lastName}`;
    }
}

var person2 = {
    firstName: 'Moinul',
    lastName: 'Robin'
}


console.log(person.fullName.call(person2));