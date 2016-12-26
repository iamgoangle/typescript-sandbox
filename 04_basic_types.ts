// boolean
let isDone: boolean = false;

// number
let myNumber: number = 6;

// string
let myString: string = 'Testing Golf';
let myBackTickString: string = `Golf ${myString}`;

// array
let listPrices: number[] = [10, 20, 30, 40];
let listArray: Array<number> = [1, 2, 3, 4];

// tuple
// allows you to express an array where the variable type can be specific in any array index
let dynamicTypeVal: [string, number];
dynamicTypeVal = ["Hello", 99];

// enum
// by default enums begin numbering thier members starting at 0
enum Color {
    Red,
    Green,
    Blue
};

let colorValue: Color = Color.Green;
let colorName: string = Color[2];

// any
// describe the type of variable that we do not know whene we are writing the application
let myTest: any = 55;
let myTest2: any = "Teerapong Singthong";

// void
// this apposite with any. the return type of function that do not return a value;
function warnUser () : void {
    console.log('test');
}
let undef: void = undefined;

// undefined
// let u: undefined = undefined;
// let n: null = null;