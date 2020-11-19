var person = {
   name: 'John Doe',
   age: 42,
   gender: 'male',
   bio: function() {
      console.log('My name is ' + this.name);
   }
};
person.bio(); // logs "My name is John Doe"
var bio = person.bio;
bio(); // logs "My name is undefined"

// Binding function context
var monitor = {
   threshold: 5,
   check: function(value) {
      if (value > this.threshold) {
         this.display("Value is too high!");
      }
   },
   display(message) {
      alert(message);
   }
};
monitor.check(7); // The value of `this` is implied by the method call syntax.
var badCheck = monitor.check;
badCheck(15); // The value of `this` is window object and this.threshold is undefined, so value > this.threshold is false
var check = monitor.check.bind(monitor);
check(15); // This value of `this` was explicitly bound, the function works.
var check8 = monitor.check.bind(monitor, 8);
check8(); // We also bound the argument to `8` here. It can't be re-specified.

// Hard binding
function Person(){
   console.log("I'm " + this.name);
}
var person0 = {name: "Stackoverflow"}
var person1 = {name: "John"};
var person2 = {name: "Doe"};
var person3 = {name: "Ala Eddine JEBALI"};
var origin = Person;
Person = function(){
   origin.call(person0);
}
Person();
//outputs: I'm Stackoverflow
Person.call(person1);
//outputs: I'm Stackoverflow
Person.apply(person2);
//outputs: I'm Stackoverflow
Person.call(person3);
//outputs: I'm Stackoverflow

// this in constructor functions
function Cat(name) {
   this.name = name;
   this.sound = "Meow";
}
var cat = new Cat("Tom"); // is a Cat object
cat.sound; // Returns "Meow"
var cat2 = Cat("Tom"); // is undefined -- function got executed in global context
window.name; // "Tom"
cat2.name; // error! cannot access property of undefined
