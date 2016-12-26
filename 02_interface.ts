interface Person {
    firstName: string;
    lastName: string;
}

function greeter (person: Person) { // implements
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = {
    firstName: 'Golf',
    lastName: 'Tester'
};

console.log(greeter(user));