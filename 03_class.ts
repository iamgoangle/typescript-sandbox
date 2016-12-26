class Student {
    fullName: string;

    constructor (public firstName, public lastName) {
        this.fullName = firstName + ' ' + lastName;
    }
}

var prayuth = new Student('Prayuth', 'Junocha');
console.log(prayuth);