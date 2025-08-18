// Primitives: number, string, boolean
// More complex types: array, objects
// Function types, parameters

// Primitives

let age: number;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["Sports", "Cooking"];

let person: {
  // object type definition
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//     isEmployee: true
// }

let people: {
  name: "Max";
  age: 32;
}[];

// Type inference

let course = "React - The Complete Guide";
// course = 12345;

let unionTypeExample: string | number = "React - The Complete Guide"; // a union type allows multiple types, in this example string & number
unionTypeExample = 12345;

// type aliases (pure TypeScript feature)

type Person = {
  name: string;
  age: number;
};

let p: Person;
let p2: Person[];

// Functions & types

function add(a: number, b: number): number {
  // return type can also be inferred
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split("");
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
