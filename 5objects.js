// Shallow cloning
const existing = { a: 1, b: 2, c: 3 };
const clone = Object.assign({}, existing);

const existing = { a: 1, b: 2, c: 3 };
const { ...clone } = existing;

// Object.freeze
var obj = {
   foo: 'foo',
   bar: [1, 2, 3],
   baz: {
      foo: 'nested-foo'
   }
};
Object.freeze(obj);
// Cannot add new properties
obj.newProperty = true;
// Cannot modify existing values or their descriptors
obj.foo = 'not foo';
Object.defineProperty(obj, 'foo', {
   writable: true
});
// Cannot delete existing properties
delete obj.foo;
// Nested objects are not frozen
obj.bar.push(4);
obj.baz.foo = 'new foo';

// Object.keys
var obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.keys(obj).map(function(key) {
   console.log(key);
});
// outputs: 0, 1, 2

// Object.assign
var user = {
   firstName: "John"
};
Object.assign(user, {lastName: "Doe", age:39});
console.log(user); // Logs: {firstName: "John", lastName: "Doe", age: 39}
var obj = Object.assign({}, user);
console.log(obj); // Logs: {firstName: "John", lastName: "Doe", age: 39}

var obj1 = {
   a: 1
};
var obj2 = {
   b: 2
};
var obj3 = {
   c: 3
};
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj); // Logs: { a: 1, b: 2, c: 3 }
console.log(obj1); // Logs: { a: 1, b: 2, c: 3 }, target object itself is changed

var var_1 = 'abc';
var var_2 = true;
var var_3 = 10;
var var_4 = Symbol('foo');
var obj = Object.assign({}, var_1, null, var_2, undefined, var_3, var_4);
console.log(obj); // Logs: { "0": "a", "1": "b", "2": "c" }

// Object rest/spread
let obj = { a: 1 };
let obj2 = { ...obj, b: 2, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 };
let obj3 = { ...obj, b: { c: 2 } };
console.log(obj3); // { a: 1, b: { c: 2 } };

// Object.defineProperty
var obj = { };
Object.defineProperty(obj, 'foo', { value: 'foo' });
console.log(obj.foo); // foo

var obj = {};
Object.defineProperty(obj, 'nameOfTheProperty', {
   value: valueOfTheProperty,
   writable: true, // if false, the property is read-only
   configurable : true, // true means the property can be changed later
   enumerable : true // true means property can be enumerated such as in a for..in loop
});

var obj = {};
Object.defineProperties(obj, {
   property1: {
      value: true,
      writable: true
   },
   property2: {
      value: 'Hello',
      writable: false
   }
});

// Accesor properties (get and set)
var person = { name: "John", surname: "Doe"};
Object.defineProperty(person, 'fullName', {
   get: function () {
      return this.name + " " + this.surname;
   },
   set: function (value) {
      [this.name, this.surname] = value.split(" ");
   }
});
console.log(person.fullName); // -> "John Doe"
person.surname = "Hill";
console.log(person.fullName); // -> "John Hill"
person.fullName = "Mary Jones";
console.log(person.name) // -> "Mary"

// Dynamic variable property names
var dictionary = {
   lettuce: 'a veggie',
   banana: 'a fruit',
   tomato: 'it depends on who you ask',
   apple: 'a fruit',
   Apple: 'Steve Jobs rocks!' // properties are case-sensitive
}
var word = prompt('What word would you like to look up today?')
var definition = dictionary[word]
alert(word + '\n\n' + definition)
console.log(dictionary.word) // doesn't work because word is taken literally and dictionary has no field named `word`
console.log(dictionary.apple) // it works! because apple is taken literally
console.log(dictionary[word]) // it works! because word is a variable, and the user perfectly typed in one of the words from our dictionary when prompted
console.log(dictionary[apple]) // error! apple is not defined as a variable

var property="test";
var obj={
   [property]=1;
};
console.log(obj.test); //1

var property="test";
var obj={};
obj[property]=1;
console.log(obj.test); //1

// Arrays are Objects
var anObject = {
   foo: 'bar',
   length: 'interesting',
   '0': 'zero!',
   '1': 'one!'
};
var anArray = ['zero.', 'one.'];
console.log(anArray[0], anObject[0]); // outputs: zero. zero!
console.log(anArray[1], anObject[1]); // outputs: one. one!
console.log(anArray.length, anObject.length); // outputs: 2 interesting
console.log(anArray.foo, anObject.foo); // outputs: undefined bar
console.log(typeof anArray == 'object', typeof anObject == 'object'); // outputs: true true
console.log(anArray instanceof Object, anObject instanceof Object); // outputs: true true
console.log(anArray instanceof Array, anObject instanceof Array); // outputs: true false
console.log(Array.isArray(anArray), Array.isArray(anObject)); // outputs: true false

// Convert object's values to array
var obj = {
   a: "hello",
   b: "this is",
   c: "javascript!",
};
var array = Object.keys(obj)
   .map(function(key) {
      return obj[key];
});
console.log(array); // ["hello", "this is", "javascript!"]

// Retrieving properties from an object
//Ex 1 : Simple data
var x = { a : 10 , b : 3} , props = [];
for(prop in x){
   props.push(prop);
}
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a : 10 , __proto__ : { b : 10 }} , props = [];
   for(prop in x){
      props.push(prop);
}
console.log(props); //["a","b"]

//Ex 3 : Data with non enumerable properties
var x = { a : 10 } , props = [];
Object.defineProperty(x, "b", {value : 5, enumerable : false});
for(prop in x){
   props.push(prop);
}
console.log(props); //["a"]

//Ex 1 : Simple data
var x = { a : 10 , b : 3} , props;
props = Object.keys(x);
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a : 10 , __proto__ : { b : 10 }} , props;
props = Object.keys(x);
console.log(props); //["a"]

//Ex 3 : Data with non enumerable properties
var x = { a : 10 } , props;
Object.defineProperty(x, "b", {value : 5, enumerable : false});
props = Object.keys(x);
console.log(props); //["a"]

//Ex 1 : Simple data
var x = { a : 10 , b : 3} , props;
props = Object.getOwnPropertyNames(x);
console.log(props); //["a","b"]

//Ex 2 : Data with enumerable properties in prototype chain
var x = { a : 10 , __proto__ : { b : 10 }} , props;
props = Object.getOwnPropertyNames(x);
console.log(props); //["a"]

//Ex 3 : Data with non enumerable properties
var x = { a : 10 } , props;
Object.defineProperty(x, "b", {value : 5, enumerable : false});
props = Object.getOwnPropertyNames(x);
console.log(props); //["a", "b"]

// Read-Only property
var a = { };
Object.defineProperty(a, 'foo', { value: 'original', writable: false });
a.foo = 'new';
console.log(a.foo); // original

// Non enumerable property
var obj = { };
Object.defineProperty(obj, "foo", { value: 'show', enumerable: true });
Object.defineProperty(obj, "bar", { value: 'hide', enumerable: false });
for (var prop in obj) {
   console.log(obj[prop]);
} // show

// Lock property description
var obj = {};
// Define 'foo' as read only and lock it
Object.defineProperty(obj, "foo", {
   value: "original value",
   writable: false,
   configurable: false
});
Object.defineProperty(obj, "foo", {writable: true});
obj.foo = "new value";
console.log(foo); // original value

// Object.getOwnPropertyDescriptor
var sampleObject = {
   hello: 'world'
};
Object.getOwnPropertyDescriptor(sampleObject, 'hello');
// Object {value: "world", writable: true, enumerable: true, configurable: true}

// Object.keys
var obj = {
   a: "hello",
   b: "this is",
   c: "javascript!"
};
var keys = Object.keys(obj);
console.log(keys); // ["a", "b", "c"]

// Properties with special characters or reserved words
myObject[123] = 'hi!' // number 123 is automatically converted to a string
console.log(myObject['123']) // notice how using string 123 produced the same result
console.log(myObject['12' + '3']) // string concatenation
console.log(myObject[120 + 3]) // arithmetic, still resulting in 123 and producing the same result
console.log(myObject[123.0]) // this works too because 123.0 evaluates to 123
console.log(myObject['123.0']) // this does NOT work, because '123' != '123.0'

// Iterating over Object entries - Object.entries()
const obj = {
   one: 1,
   two: 2,
   three: 3
};
Object.entries(obj);
// [
//    ["one", 1],
//    ["two", 2],
//    ["three", 3]
// ]

for(const [key, value] of Object.entries(obj)) {
   console.log(key); // "one", "two" and "three"
   console.log(value); // 1, 2 and 3
}

// Object.values()
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']
