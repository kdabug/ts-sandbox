console.log("Hello from ts");

let myString1: string;
let myNum: number;
let myBool: boolean;
let myVar: any;
// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];
let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;
let strNumTuple: [string, number];
let myVoid: void = undefined;
let myNull: null = null;
let myUndefinied: undefined = null;

myString1 = "Hello World";
myString1 = "My" + " " + "Typescript" + " " + "File";
myString1 = "Hello".slice(0, 3); //console logs 'Hel'
myNum = 22;
myNum = 5 * 5;
myBool = false;
//myBool = 1; // this won't work
myBool = true;
myVar = true;
myVar = 12;
myVar = "My Var Has Any";
strArr = ["Hello", "World"];
//strArr = ["Does", "this", "work", 4]; //does not work
numArr = [1, 2, 3, 4];
boolArr = [true, false, true];
strNumTuple = ["Hello", 4];
//strNumTuple = [4, 4]; //does not work
//strNumTuple = ["Hello", 4, "World"]; //does not work

console.log(myString1);
console.log(myNum);
