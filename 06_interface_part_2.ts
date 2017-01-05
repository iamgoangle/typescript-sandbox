interface Employee {
    firstname: string,
    lastname: string,
    id: number,
    single: boolean
}

function printEmployee (emp: Employee) {
    console.log(emp);
}

let golf = {
    firstname: 'Teerapong',
    lastname: 'Singthong',
    id: 123456789,
    single: true
}

printEmployee(golf);