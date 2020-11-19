var arr = [1, 2, 3, 4];
var arr2 = new Array(1, 2, 3, 4);
var arr3 = new Array("foo");
var realArray = ['a', 'b', 'c'];
var arrayLike = { 0: 'a',
                  1: 'b',
                  2: 'c',
                  length: 3 };
Array.of(21, "Hello", "World"); // [21, "Hello", "World"]
var newArray = Array.from({ length: 5 }, (_, index) => Math.pow(index, 4));
// [0, 1, 16, 81, 256]

// Reducing values
[1, 2, 3, 4].reduce(function(a, b) {
   return a + b;
});
// → 10

[2].reduce(function(a, b) {
   console.log(a, b); // prints: 1 2
   return a + b;
}, 1);
// → 3

// Mapping values
['one', 'two', 'three', 'four'].map(value => value.length);
// → [3, 3, 5, 4]

// Filtering Object Arrays
// Suppose we want to get all odd number in an array:
var numbers = [5, 32, 43, 4];
let odd = numbers.filter(n => n % 2 !== 0); // can be shortened to (n => n % 2)
// → [5, 43]

var people = [{
   id: 1,
   name: "John",
   age: 28
}, {
   id: 2,
   name: "Jane",
   age: 31
}, {
   id: 3,
   name: "Peter",
   age: 55
}];
let young = people.filter(person => person.age < 35);
// → [28, 31]

[1, 2, 3, 4, 5].filter(value => value > 2);
// [3, 4, 5]

// Sorting
['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort();
// [-1, '-4', '2', 34, '4', 'E', 'K', 'W', 'a', 'l', 'o', 'o', 'r', 's', 't', 'v']

['s', 't', 'a', 'c', 'K', 'o', 'v', 'E', 'r', 'f', 'l', 'W', '2', '1'].sort((a, b) => {
   return a.localeCompare(b);
}); // ['1', '2', 'a', 'c', 'E', 'f', 'K', 'l', 'o', 'r', 's', 't', 'v', 'W']

["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
   return b.length - a.length;
}); // ["elephants", "penguins", "zebras", "dogs"];

["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
   return a.length - b.length;
}); // ["dogs", "zebras", "penguins", "elephants"];

[100, 1000, 10, 10000, 1].sort(function(a, b) {
   return a - b;
}); // [1, 10, 100, 1000, 10000]

[100, 1000, 10, 10000, 1].sort(function(a, b) {
   return b - a;
});  // [10000, 1000, 100, 10, 1]

[10, 21, 4, 15, 7, 99, 0, 12].sort(function(a, b) {
   return (a & 1) - (b & 1) || a - b;
}); // [0, 4, 10, 12, 7, 15, 21, 99]

// Iteration
let myArray = [3, 5, 7];
myArray.foo = "hello";
for (var i in myArray) {
   console.log(i); // logs 0, 1, 2, "foo"
}
for (var i of myArray) {
   console.log(i); // logs 3, 5, 7
}

// Destructuring an array
const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;
length === 3;     // → true
height === 4;     // → true
hypotenuse === 5; // → true

const [,b,,c] = [1, 2, 3, 4];
console.log(b, c); // → 2, 4

// Removing duplicate elements
var uniqueArray = [... new Set(['a', 1, 'a', 2, '1', 1])];
console.log(uniqueArray);
// returns ['a', 1, 2, '1']

// Reversing
[1, 2, 3, 4].reverse();
// [4, 3, 2, 1]

var arr = [1, 2, 3, [1, 2, 3, ['a', 'b', 'c']]];
deepReverse(arr);
// -> [[['c','b','a'], 3, 2, 1], 3, 2, 1]

// Cloning
var clone = arrayToClone.slice();
arrayToClone = [1, 2, 3, 4, 5];
clone1 = Array.from(arrayToClone);
clone2 = Array.of(...arrayToClone);
clone3 = [...arrayToClone] // the shortest way

// Concatenating
var array1 = [1, 2];
var array2 = [3, 4, 5];
var array3 = array1.concat(array2);
// [1, 2, 3, 4, 5]
var array3 = [...array1, ...array2]
// [1, 2, 3, 4, 5]

var array1 = ["a", "b"],
    array2 = ["c", "d"],
    array3 = ["e", "f"],
    array4 = ["g", "h"];
var arrConc = array1.concat(array2, array3, array4);
// ["a", "b", "c", "d", "e", "f", "g", "h"]
var arrConc = [...array1, ...array2, ...array3, ...array4]
// ["a", "b", "c", "d", "e", "f", "g", "h"]

var longArray = [1, 2, 3, 4, 5, 6, 7, 8],
    shortArray = [9, 10];
longArray.push.apply(longArray, shortArray);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
longArray.push(...shortArray)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var array = ["a", "b"];
var arrConc = array.concat("c", "d");
// ["a", "b", "c", "d"]
var arrConc = [...array, "c", "d"]
// ["a", "b", "c", "d"]

var arr1 = ["a","b"];
var arr2 = ["e", "f"];
var arrConc = arr1.concat("c", "d", arr2);
// ["a", "b", "c", "d", "e", "f"]
var arrConc = [...array, "c", "d", ...arr2]
// ["a", "b", "c", "d", "e", "f"]

// Searching
let people = [
   { name: "bob" },
   { name: "john" }
];
let bob = people.find(person => person.name === "bob");
// Or, more verbose
let bob = people.find(function(person) {
   return person.name === "bob";
});

array = [
   { value: 1 },
   { value: 2 },
   { value: 3 },
   { value: 4 },
   { value: 5 }
];
var index = array.findIndex(item => item.value === 3); // 2
var index = array.findIndex(item => item.value === 12); // -1

// Convert a String to an Array
var strArray = "StackOverflow".split("");
// strArray = ["S", "t", "a", "c", "k", "O", "v", "e", "r", "f", "l", "o", "w"]
var strArray = [..."sky is blue"];
// strArray = ["s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]

// Removing items from an array
var array = [1, 2, 3, 4];
array.shift();
// [2, 3, 4]

var array = [1, 2, 3];
array.pop();
// [1, 2]

var array = [1, 2, 3, 4];
array.splice(1, 2);
// [2, 3]

var array = [1, 2, 3, 4];
array.splice(2);
// [3, 4]

var array = [1, 2, 3, 4, 5];
console.log(array.length); // 5
delete array[2];
console.log(array); // [1, 2, undefined, 4, 5]
console.log(array.length); // 5

array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array); // [1, 2]

// Removing all elements
var arr = [1, 2, 3, 4];
arr.length = 0;

// Finding the minimum or maximum element
var myArray = [1, 2, 3, 4];
Math.min.apply(null, myArray); // 1
Math.max.apply(null, myArray); // 4

var myArray = [1, 2, 3, 4, 99, 20];
var maxValue = Math.max(...myArray); // 99
var minValue = Math.min(...myArray); // 1

var myArray = [1, 2, 3, 4];
myArray.reduce((a, b) => Math.min(a, b)); // 1
myArray.reduce((a, b) => Math.max(a, b)); // 4

// Joining array elements in a string
console.log(["Hello", " ", "world"].join("")); // "Hello world"
console.log([1, 800, 555, 1234].join("-")); // "1-800-555-1234"

// Removing/Adding elements using splice()
var values = [1, 2, 3, 4, 5, 3];
var i = values.indexOf(3);
if (i >= 0) {
   values.splice(i, 1);
} // [1, 2, 4, 5, 3]

var values = [1, 2, 4, 5, 3];
var i = values.length + 1;
values.splice(i, 0, 6, 7, 8);
// [1, 2, 4, 5, 3, 6, 7, 8]

// the entries() method
var letters = ['a','b','c'];
for(const[index,element] of letters.entries()){
   console.log(index,element);
}
// 0 "a"
// 1 "b"
// 2 "c"

// Append/Prepend items to Array
var array = [3, 4, 5, 6];
array.unshift(1, 2);
// [1, 2, 3, 4, 5, 6]

var array = [1, 2, 3];
array.push(4, 5, 6);
// [1, 2, 3, 4, 5, 6]

// Checking if an object is an Array
Array.isArray([]) // true
Array.isArray([1, 2, 3]) // true
Array.isArray({}) // false
Array.isArray(1) // false

// Test all array items for equality
[1, 2, 1].every((item, i, list) => item === list[0]); // false
[1, 1, 1].every((item, i, list) => item === list[0]); // true

let data = [
   { name: "alice", id: 111 },
   { name: "alice", id: 222 }
];
data.every((item, i, list) => item.name === list[0].name); // true
data.every((item, i, list) => item === list[0]); // false

// Copy part of an Array
// Let's say we have this Array of Alphabets
var arr = ["a", "b", "c", "d"...];
// I want an Array of the first two Alphabets
var newArr = arr.slice(0, 2); // newArr === ["a", "b"]
// Let's say we have this Array of Numbers and I don't know it's end
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9...];
// I want to slice this Array starting from number 5 to its end
var newArr = arr.slice(4); // newArr === [5, 6, 7, 8, 9...]
