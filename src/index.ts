let sales: number = 123_456_789;
let course: string = 'TypeScript';
let is_published: boolean = true;

// the any type(avoid using this datatype)
let level;
level = 1;
level = 'a';

function render(document: any) {
    console.log(document);
}

// Arrays
// JavaScript arrays look like this : let number = [1,2,'3']
let numbers: number[] = [1,2,3];
numbers.forEach(n => n.toExponential);

// Tuples
let user: [number, string] = [1, 'Ayush'];

// Enums
const enum Size {Small = 1, Medium, Large}; 
let mySize: Size = Size.Medium;
console.log(mySize);

// Functions
function calculateTax(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10_000, 2023));

// Objects
type Employee = {
    readonly id: number,
    name?: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    id : 1,
    name: 'Ayush',
    retire: (date: Date) => {
        console.log(date);
    }
}

// Union Types 