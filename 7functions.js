function Cat(name) {
   this.name = name;
   this.sound = "Meow";
}
let cat = new Cat("Tom");
cat.sound; // Returns "Meow"

Cat.prototype.speak = function() {
   console.log(this.sound);
}
cat.speak(); // Outputs "Meow"
cat.constructor // Returns the `Cat`
cat instanceof Cat // Returns "true"

const person = {
   name: "John"
};
console.log('The name of the person is', person.name);
// The name of the person is John
person.name = "Steve";
console.log('The name of the person is', person.name);
// The name of the person is Steve
person.surname = "Fox";
console.log('The name of the person is', person.name, 'and the surname is', person.surname);
// The name of the person is Steve and the surname is Fox

// Scoping
function foo() {
   var a = 'hello';
   function bar() {
      var b = 'world';
      console.log(a); // => 'hello'
      console.log(b); // => 'world'
   }
   console.log(a); // => 'hello'
   console.log(b); // reference error
}
console.log(a); // reference error
console.log(b); // reference error

// Currying
var prism = function(l, w, h) {
   return l * w * h;
}

function prism(l) {
   return function(w) {
      return function(h) {
         return l * w * h;
      }
   }
}

// alternatively, with concise ECMAScript 6+ syntax:
var prism = l => w => h => l * w * h;

var a = function() { return 42 }();
console.log(a) // => 42

(() => console.log("Hello!"))(); // => Hello!

// Named Functions
var namedSum = function sum (a, b) {
   return a + b;
}
var anonSum = function (a, b) {
   return a + b;
}
namedSum(1, 3); // 4
anonSum(1, 3);  // 4

var foo = function () {}
console.log(foo.name); // outputs 'foo'

function foo () {}
console.log(foo.name); // outputs 'foo'

var foo = function bar () {}
console.log(foo.name); // outputs 'bar'

// Functions with an Unknown Number of Arguments
function logSomeThings() {
   for (var i = 0; i < arguments.length; ++i) {
      console.log(arguments[i]);
   }
}
logSomeThings('hello', 'world');
// hello
// world

function personLogsSomeThings(person, ...msg) {
   msg.forEach(arg => {
      console.log(person, 'says', arg);
   });
}
personLogsSomeThings('John', 'hello', 'world');
// John says hello
// John says world

const logArguments = (...args) => console.log(args)
const list = [1, 2, 3]
logArguments('a', 'b', 'c', ...list)
// output: Array [ "a", "b", "c", 1, 2, 3 ]

// Default parameters
function printMsg(msg='Default value for msg.') {
   console.log(msg);
}
printMsg(); // -> "Default value for msg."
printMsg(undefined); // -> "Default value for msg."
printMsg('Now my msg in different!'); // -> "Now my msg in different!"

let param_check = (p = 'str') => console.log(p + ' is of type: ' + typeof p);
param_check(); // -> "str is of type: string"
param_check(undefined); // -> "str is of type: string"
param_check(1); // -> "1 is of type: number"
param_check(this); // -> "[object Window] is of type: object"

let zero = 0;
function multiply(x) { return x * 2;}
function add(a = 1 + zero, b = a, c = b + a, d = multiply(c)) {
   console.log((a + b + c), d);
}
add(1); // 4, 4
add(3); // 12, 12
add(2, 7); // 18, 18
add(1, 2, 5); // 8, 10
add(1, 2, 5, 10); // 8, 20

let array = [1]; // meaningless: this will be overshadowed in the function's scope
function add(value, array = []) {
   array.push(value);
   return array;
}
add(5); // [5]
add(6); // [6], not [5, 6]
add(6, add(5)); // [5, 6]

function foo(a = 1, b = a + 1) {
   console.info(arguments.length, arguments);
   console.log(a,b);
}
foo(); // info: 0 >> [] | log: 1, 2
foo(4); // info: 1 >> [4] | log: 4, 5
foo(5, 6); // info: 2 >> [5, 6] | log: 5, 6

// Call and apply
let obj = {
   a: 1,
   b: 2,
   set: function (a, b) {
      this.a = a;
      this.b = b;
   }
};
obj.set(3, 7); // normal syntax
obj.set.call(obj, 3, 7); // equivalent to the above
obj.set.apply(obj, [3, 7]); // equivalent to the above; note that an array is used
console.log(obj); // prints { a: 3, b: 5 }

let myObj = {};
myObj.set(5, 4); // fails; myObj has no `set` property
obj.set.call(myObj, 5, 4); // success; `this` in set() is re-routed to myObj instead of obj
obj.set.apply(myObj, [5, 4]); // same as above; note the array
console.log(myObj); // prints { a: 3, b: 5 }

function showName(label) {
   console.log(label + ":" + this.name);
}
var student1 = {
   name: "Ravi"
};
var student2 = {
   name: "Vinod"
};
// create a function just for student1
var showNameStudent1 = showName.bind(student1);
showNameStudent1("student1"); // outputs "student1:Ravi"
// create a function just for student2
var showNameStudent2 = showName.bind(student2, "student2");
showNameStudent2(); // outputs "student2:Vinod"
// attaching a method to an object doesn't change `this` value of that method.
student2.sayName = showNameStudent1;
student2.sayName("student2"); // outputs "student2:Ravi"

// Passing arguments by reference or value
var obj = {a: 2};
function myfunc(arg){
   arg = {a: 5}; // Note the assignment is to the parameter variable itself
}
myfunc(obj);
console.log(obj.a); // 2

var obj = {a: 2};
function myfunc(arg){
   arg.a = 5; // assignment to a property of the argument
}
myfunc(obj);
console.log(obj.a); // 5

var s = 'say';
function myfunc(arg){
   arg += ' hello'; // assignment to the parameter variable itself
}
myfunc(s);
console.log(s); // 'say'

var obj = {a: 2, b: 3};
function myfunc(arg){
   arg = Object.assign({}, arg); // assignment to argument variable, shallow copy
   arg.a = 5;
}
myfunc(obj);
console.log(obj.a); // 2

var a = 2;
function myfunc(arg){
   arg++;
   return arg;
}
a = myfunc(a);
console.log(obj.a); // 3

// Function Arguments, "arguments" object, rest and spread parameters
function addition (argument1, argument2){
   return argument1 + argument2;
}
console.log(addition(2, 3)); // -> 5

(function() { console.log(arguments) })(0,'str', [2,{3}]) // -> [0, "str", Array[2]]

(function(a, ...b){console.log(typeof b+': '+b[0]+b[1]+b[2]) })(0,1,'2',[3],{i:4});
// -> object: 123

let nums = [2,42,-1];
console.log(...['a','b','c'], Math.max(...nums)); // -> a b c 42

// Function Composition
const formatText = compose(capitalize, sign);
formatText('this is an example')
//This is an example,
//made with love

// Impure function
let obj = { a: 0 }
const impure = (input) => {
   // Modifies input.a
   input.a = input.a + 1;
   return input.a;
}
let b = impure(obj)
console.log(obj) // Logs { "a": 1 }
console.log(b) // Logs 1

let a = 1;
let impure = (input) => {
   // Multiply with variable outside function scope
   let output = input * a;
   return output;
}
console.log(impure(2)) // Logs 2
a++; // a becomes equal to 2
console.log(impure(2)) // Logs 4

// Pure function
let obj = { a: 0 }
const pure = (input) => {
   // Does not modify obj
   let output = input.a + 1;
   return output;
}
let b = pure(obj)
console.log(obj) // Logs { "a": 0 }
console.log(b) // Logs 1

let pure = (input) => {
   let a = 1;
   // Multiply with variable inside function scope
   let output = input * a;
   return output;
}
console.log(pure(2)) // Logs 2

// Accepting Functions as Arguments
function transform(fn, arr) {
   let result = [];
   for (let el of arr) {
      result.push(fn(el)); // We push the result of the transformed item to result
   }
   return result;
}
console.log(transform(x => x * 2, [1,2,3,4])); // [2, 4, 6, 8]
console.log([1, 2, 3, 4].map(x => x * 2));     // [2, 4, 6, 8]

// Continuation
function doSomething(then) {
   console.log('Doing something');
   then();
}
// Do something, then execute callback to log 'done'
doSomething(function () {
   console.log('Done');
});
console.log('Doing something else');
// "Doing something"
// "Done"
// "Doing something else"

doSomethingAsync(then) {
   setTimeout(then, 1000);
   console.log('Doing something asynchronously');
}
doSomethingAsync(function() {
   console.log('Done');
});
console.log('Doing something else');
// "Doing something asynchronously"
// "Doing something else"
// "Done"

// Error handling and control-flow branching
const expected = true;
function compare(actual, success, failure) {
   if (actual === expected) {
      success();
   } else {
      failure();
   }
}
function onSuccess() {
   console.log('Value was expected');
}
function onFailure() {
   console.log('Value was unexpected/exceptional');
}
compare(true, onSuccess, onFailure);
compare(false, onSuccess, onFailure);
// "Value was expected"
// "Value was unexpected/exceptional"

function compareAsync(actual, success, failure) {
   setTimeout(function () {
      compare(actual, success, failure)
   }, 1000);
}
compareAsync(true, onSuccess, onFailure);
compareAsync(false, onSuccess, onFailure);
console.log('Doing something else');
// Outputs:
// "Doing something else"
// "Value was expected"
// "Value was unexpected/exceptional"
