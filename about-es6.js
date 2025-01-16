function add(a,b){
    // const result = a + b;
    //  return result;
     return a + b ;
}

// function expration ES5

const add2 = function(a,b){
    return a + b ;
}

// arrow function ES6

const add3 = (a,b) => a +b 

const sum = add3(23,34);

// single paramiter or one paramiter 
const maltifly =(a)=> a *2
const sums =a=> a + 2

const valye =maltifly(34)
const valye2 =sums(34)

console.log(valye,valye2)

// no paramitter 

const getPI =()=> Math.PI

console.log(getPI())

// large arrow funtion

const doMath = (a,b,c) => {
    const sum = a+b+c ;
    const maltifly = a*b*c ;
    const result =sum+maltifly;
    return result;
}

// 'this' will refer to obj

// ... -> spread oparator use for get number from array 

const max = [34,45,434,344,34,34]

const arraymax = Math.max(...max);
console.log(arraymax);

// use spread oparator to copy 

const friends =[12,233,34,233]

const bondo = friends;

// const dost = [...friends] copy 

friends.push(233);

console.log(friends);

console.log(dost);

// advanced
const sonkha =[233,...friends,2323545];


// Merging arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Merging objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }

// Function arguments
function add(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
console.log(add(...nums)); // 6


// Destructur and alious

const actor ={
    name:'Kamrul',
    age : 17,
    Phone : '01728382938',
    money:123234341442
}

// age's destructur is boyos
const {Phone ,age:boyos} = actor

console.log(Phone)
console.log(Phone)
console.log(Phone)
console.log(Phone)

console.log(boyos)
console.log(boyos)
console.log(boyos)
console.log(boyos)

// array destructering

const num = [23,34];
const [first,second]=num;
const [x,y] = [23,34];

// adbance 

function doble(a,b){
    return [a*2,b*3]
}

const [prothom,thitho]=doble(12,23);

console.log(prothom,thitho);


// Object.keys(Object names) use for get Object proparty

// const pair = Object.entries(Object names) use for this

// array of array or tow daimantional array

// [
//     [proparty,value]
//     [proparty,value]
//     [proparty,value]
//     [proparty,value]
// ]

// type-1

// delete.Object names.value

// type-2
// olternet const {delete which ,...any name}=Object names
// console.log(any name)

// type-3 Freeze

// Object.freeze(Object names) 

// Object names .add(proparty)=add(valye)
// console.log(Object names)

// modyfy but add or remove not alow
// Object.seal(Object names)

// .concat("hi "+icon)
// ["hi "+icon].join(' ')
// `hi ${icon}`

// get name carector use for of loop

// optional chine ? use for ditacting Object proparty

// Map ==> loops through each element of the array and do the operation that you  passed in the call back function and hold the resulr from each operation in an array and finally returtns you the array 

const numbers = [4,5,6,7,8,10];

function doubleIt(num){
console.log('num now', num)
return num * 2;
}

const result = numbers.map(result)

// console.log(result);

const doble2 = n => n*2;

const outpot =numbers.map(doble2);

const outpot2 =numbers.map(n =>n*2);

//  forEach not return anything

const nummbers = [23,34,344,43,]

const results = nummbers .forEach(n=>{

})

console.log(results);

// filter selects elements based on a condition and retuyrns an array with the elements that rulrilled the condition.And nothing elemant return emt array  

const numsbers = [2,342,33,2,3,2,3,2,];

const selected = numsbers.filter(p=>p>3);
console.log(selected);

// find selects elements based on a condition and retuyrns an array with the elements that rulrilled the condition.Or give first elemant of array and nothing elemant return undefind  

// reduce
const sume = numbers.reduce((p,c)=>p+c ,0)
console.log(sume)