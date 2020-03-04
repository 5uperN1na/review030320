//Destructuring assignment syntax allows us 
//to unpack values from an array or object and assign them into their own, separate variables

let [a, b, c] = ['Apple', 'Banana', 'Pear'];
console.log(a);
// 'Apple' console.log(b); // 'Banana' console.log(c); // 'Pear

//Destructuring Assignment with Objects

let p1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 29
};

let { firstName } = p1;
// can do multiple let { lastName, age } = p1;
console.log(firstName);
// 'Jane' console.log(lastName); // 'Doe' console.log(age); // 29

//Object Destructuring: Default Values

let p2 = {
    fName: 'Jo',
    lName: 'Do',
    a: 30
};

let { fName, g = 'm' } = p2;
console.log(fName);
// 'Jo' console.log(g); // 'm'

//Object Destructuring: Renaming Properties

let p3 = {
    f1Name: 'Jim',
    l1Name: 'Dye',
    a1: 29
};

let { f1Name: fName1 } = p3;
console.log(fName1);
// 'jim'

//Array Destructuring in Function Parameters

function myFunc([op1, op2]) {
    console.log(op1);
    console.log(op2);
}
let myArray = [12, 7];
myFunc(myArray);

//Object Destructuring in Function Parameters

function myOtherFunc({ lat, lng }) {
    console.log(lat);
    console.log(lng);
}
let address = {
    street: '123 Main St',
    city: 'Birmingham',
    state: 'AL',
    lat: '33.514961',
    lng: '86.807853'
};
myOtherFunc(address)