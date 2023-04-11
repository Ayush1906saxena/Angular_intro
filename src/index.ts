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
enum Size {Small, Medium, Large};
