class MyClass {
   constructor(option) {
      console.log(`Creating instance using ${option} option.`);
      this.option = option;
   }
}
const foo = new MyClass('speedy'); // logs: "Creating instance using speedy option"

// Class Inheritance
class SuperClass {
   constructor() {
      this.logger = console.log;
   }
   log() {
      this.logger(`Hello ${this.name}`);
   }
}
class SubClass extends SuperClass {
   constructor() {
      super();
      this.name = 'subclass';
   }
}
const subClass = new SubClass();
subClass.log(); // logs: "Hello subclass"

// Static Methods
class MyClass {
   static myStaticMethod() {
      return 'Hello';
   }
   static get myStaticProperty() {
      return 'Goodbye';
   }
}
console.log(MyClass.myStaticMethod()); // logs: "Hello"
console.log(MyClass.myStaticProperty); // logs: "Goodbye"
// static properties are not defined on object instances, however, they are defined on subclasses
class MySubClass extends MyClass {};
console.log(MySubClass.myStaticMethod()); // logs: "Hello"
console.log(MySubClass.myStaticProperty); // logs: "Goodbye"

// Getters and Setters
class MyClass {
   constructor() {
      this.names_ = [];
   }
   set name(value) {
      this.names_.push(value);
   }
   get name() {
      return this.names_[this.names_.length - 1];
   }
}
const myClassInstance = new MyClass();
myClassInstance.name = 'Joe';
myClassInstance.name = 'Bob';
console.log(myClassInstance.name); // logs: "Bob"
console.log(myClassInstance.names_); // logs: ["Joe", "Bob"]
// If you only define a setter, attempting to access the property will always return "undefined"
const classInstance = new class {
   set prop(value) {
      console.log('setting', value);
   }
};
classInstance.prop = 10; // logs: "setting", 10
console.log(classInstance.prop); // logs: undefined
// If you only define a getter, attempting to assign the property will have no effect
const classInstance = new class {
   get prop() {
      return 5;
   }
};
classInstance.prop = 10;
console.log(classInstance.prop); // logs: 5

// Private Members
class Queue {
   constructor () { // - does generate a closure with each instantiation.
      const list = []; // - local state ("private member").
      this.enqueue = function (type) { // - privileged public method
         // accessing the local state
         list.push(type); // "writing" alike.
         return type;
      };
      this.dequeue = function () { // - privileged public method
         // accessing the local state
         return list.shift(); // "reading / writing" alike.
      };
   }
}
var q = new Queue;
q.enqueue(9); // ... first in ...
q.enqueue(8); //
q.enqueue(7); //
console.log(q.dequeue()); // 9 ... first out.
console.log(q.dequeue()); // 8
console.log(q.dequeue()); // 7
console.log(q); // {}
console.log(Object.keys(q)); // ["enqueue","dequeue"]

// Methods
class Something {
   constructor(data) {
      this.data = data
   }
   doSomething(text) {
      return {
         data: this.data,
         text
      }
   }
}
var s = new Something({})
s.doSomething("hi") // returns: { data: {}, text: "hi" }

// Dynamic Method Names
let METADATA = Symbol('metadata');
class Car {
   constructor(make, model) {
      this.make = make;
      this.model = model;
   }
   // example using symbols
   [METADATA]() {
      return {
         make: this.make,
         model: this.model
      };
   }
   // you can also use any javascript expression
   // this one is just a string, and could also be defined with simply add()
   ["add"](a, b) {
      return a + b;
   }
   // this one is dynamically evaluated
   [1 + 2]() {
      return "three";
   }
}
let MazdaMPV = new Car("Mazda", "MPV");
MazdaMPV.add(4, 5); // 9
MazdaMPV[3](); // "three"
MazdaMPV[METADATA](); // { make: "Mazda", model: "MPV" }

// Managing Private Data with Classes
const topSecret = Symbol('topSecret'); // our private key; will only be accessible on the scope of the module file
export class SecretAgent{
   constructor(secret){
      this[topSecret] = secret; // we have access to the symbol key (closure)
      this.coverStory = 'just a simple gardner';
      this.doMission = () => {
         figureWhatToDo(topSecret[topSecret]); // we have access to topSecret
      };
   }
}
// Because symbols are unique, we must have reference to the original symbol to access the private property.
import {SecretAgent} from 'SecretAgent.js'
const agent = new SecretAgent('steal all the ice cream');
// ok let's try to get the secret out of him!
Object.keys(agent); // ['coverStory'] only cover story is public, our secret is kept.
agent[Symbol('topSecret')]; // undefined, as we said, symbols are always unique, so only the original symbol will help us to get the data.
// But it's not 100% private; let's break that agent down! We can use the Object.getOwnPropertySymbols method to get the object symbols.
const secretKeys = Object.getOwnPropertySymbols(agent);
agent[secretKeys[0]] // 'steal all the ice cream' , we got the secret.
