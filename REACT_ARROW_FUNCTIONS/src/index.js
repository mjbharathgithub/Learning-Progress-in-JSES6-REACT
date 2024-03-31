import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(num){
//   return num*2;
// }
let newNumbers=numbers.map(num =>num*2);
console.log("mapped list using arrow function :"+newNumbers);

//Filter - Create a new array by keeping the items that return true.

newNumbers=numbers.filter((num) =>num>10);
console.log("filtered list using arrow function :"+newNumbers);
newNumbers.length=0;

numbers.forEach(function (num){
  if(num>10) newNumbers.push(num);
});
console.log("filterd list using forEach :"+newNumbers);




//Reduce - Accumulate a value by doing something to each item in an array.

let n=numbers.reduce((accumulator,current)=>accumulator+current);
console.log("Reduce method using arrow function :"+n);

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

//task

newNumbers.length=0;

newNumbers=emojipedia.map(data=>data.meaning.substring(0,100));
console.log(newNumbers)