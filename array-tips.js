// CONVERT AN ARRAY TO AN OBJECT

let fruits = ["apple", "peach", "grape", "pear", "orange", "kiwi"];
let fruitsObject = { ...fruits };
console.log(fruitsObject);

// REMOVE DUPLICATES FROM AN ARRAY

let manyApples = [
  "apple",
  "peach",
  "apple",
  "apple",
  "orange",
  "apple",
  "apple",
];

let oneApple = Array.from(new Set(manyApples));
console.log(oneApple);

// FILL ARRAY WITH DATA

let arr = new Array(10).fill("Olivia");
console.log(arr);

// FIND THE INTERSECTION OF TWO ARRAYS

let numOne = [0, 2, 4, 6, 8, 8];
let numTwo = [1, 2, 3, 4, 5, 6];

let duplicatedValues = [...new Set(numOne)].filter((item) =>
  numTwo.includes(item)
);
// alternative: let duplicatedValues = [...numOne].filter((item) => numTwo.includes(item) );
console.log(duplicatedValues);

// GET RANDOM VALUE FROM ARRAY

colors = ["pink", "blue", "yellow", "green", "orange", "grey"];
randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);

// REPLACE SPECIFIC VALUE IN ARRAY

let words = ["hi", "hello", "hey", "bye", "goodbye"];
//splice: (stating place, how many values to remove, value(s) to add)
words.splice(0, 1, "Olivia", "apple");
console.log(words);

// MAP ARRAY WITHOUT .map()

let people = [
  { name: "john", age: 22 },
  { name: "bee", age: 32 },
  { name: "amy", age: 62 },
  { name: "jake", age: 42 },
  { name: "olivia", age: 22 },
  { name: "molly", age: 34 },
];

let peopleNames = Array.from(people, ({ name }) => name);
console.log(peopleNames);

// EMPTY AN ARRAY

let lotOfKiwis = ["kiwi", "peach", "kiwi", "pear", "kiwi", "kiwi"];

lotOfKiwis.length = 0;
console.log(lotOfKiwis);

// MEREG ARRAYS

let allArraysAbove = [
  ...fruits,
  ...manyApples,
  ...numOne,
  ...numTwo,
  ...colors,
  ...words,
  ...people,
];
console.log(allArraysAbove);

// REMOVE FALSY VALUES

let mixedArr = [0, "blue", "", NaN, 9, true, undefined, "white", false];
let trueArr = mixedArr.filter(Boolean);
console.log(trueArr);

// REVERSE AN ARRAY

let letters = ["a", "b", "c", "d"];
let reversedLetters = letters.reverse();
console.log(reversedLetters);

// LAST INDEX OF METHOD
// findingthe index of the last occurence of the given element
// if array have duplicated values, can fin dthe position of its last occurance
let nums = [1, 5, 2, 6, 3, 5, 2, 3, 6, 5, 2, 7];
let lastIndex = nums.lastIndexOf(5);
console.log(lastIndex);

// SUM ALL VALUES IN ARRAY

let arrToAdd = [1, 2, 3, 4, 10];
let added = arrToAdd.reduce((x, y) => x + y);
console.log(added);

// QUICKLY CONVERT NUMBER TO STRING

const val = 5 + "";
console.log(typeof val, val);

// CONVERT TO STRING
// using the addition operator +

let int = "15";
int = +int;
console.log(typeof int, int)


// .push(value), adds element at the end of array, returns the new length
// .pop(), removes last element, returns element that was deleted
//.shift, turns the first item of the array and deletes from the array