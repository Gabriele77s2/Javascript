for (var i = 0; i < 4; i++) {
   console.log(i);
} // 0 1 2 3

// Multiple declarations
var array = ['a', 'b', 'c'];
for (var i = 0; i < array.length; i++) {
   console.log(array[i]);
} // 'a' 'b' 'c'

// Changing the increment
for (var i = 0; i < 100; i += 2 /* Can also be: i = i + 2 */) {
   console.log(i);
} // 0 2 4 ...

// Decremented loop
for (var i = 5; i >=0; i--) {
   console.log(i);
} //  5 4 3 2 1 0

// for ... of
const iterable = [0, 1, 2];
for (let i of iterable) {
   console.log(i);
} // 0 1 2

// Strings
const string = "abc";
for (let chr of string) {
   console.log(chr);
} // a b c

// Sets
const names = ['bob', 'alejandro', 'zandra', 'anna', 'bob'];
const uniqueNames = new Set(names);
for (let name of uniqueNames) {
   console.log(name);
} // bob alejandro zandra anna

// Maps
const map = new Map()
   .set('abc', 1)
   .set('def', 2)
for (const iteration of map) {
   console.log(iteration)
} // ['abc', 1] ['def', 2]
for (const [key, value] of map) {
   console.log(key + ' is mapped to ' + value)
} // abc is mapped to 1 def is mapped to 2

// Objects
const someObject = { name: 'Mike' };
for (let key of Object.keys(someObject)) {
   console.log(key + ": " + someObject[key]);
} // name: Mike

// for ... in
var object = {"a":"foo", "b":"bar", "c":"baz"};
// `a` is inaccessible
Object.defineProperty(object , 'a', {
   enumerable: false,
});
for (var key in object) {
   if (object.hasOwnProperty(key)) {
      console.log('object.' + key + ', ' + object[key]);
   }
} // object.b, bar object.c, baz

// while
var i = 0;
while (i < 5) {
   console.log(i);
   i++;
} // 0 1 2 3 4

// Decremented loop
var i = 5;
while (i >= 0) {
   console.log(i);
   i--; /* equivalent to i=i-1 */
} // 5 4 3 2 1 0

// Do...while Loop
var i = 101;
do {
   console.log(i);
} while (i < 100);
// 101

// continue a for
for (var i = 0; i < 3; i++) {
   if (i === 1) {
      continue;
   }
   console.log(i);
} // 0 2

// continue a while
var i = 0;
while (i < 3) {
   if (i === 1) {
      i = 2;
      continue;
   }
   console.log(i);
   i++;
} // 0 2

// Break specific nested loops
outerloop:
for (var i = 0; i < 3; i++){
   innerloop:
   for (var j = 0; j < 3; j++){
      console.log(i);
      console.log(j);
      if (j == 1){
         break outerloop;
      }
   }
} // 0 0 0 1
