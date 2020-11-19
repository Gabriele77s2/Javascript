// Standard function prototype
function Foo (){}
Foo.prototype.bar = function() {
   return 'I am bar';
};
var foo = new Foo();
console.log(foo.bar()); // logs `I am bar`

// Difference between Object.key and Object.prototype.key
function Foo() {};
Foo.style = 'bold';
var foo = new Foo();
console.log(Foo.style); // 'bold'
console.log(foo.style); // undefined
Foo.prototype.style = 'italic';
console.log(Foo.style); // 'bold'
console.log(foo.style); // 'italic'

// Prototypal inheritance
var prototype = { foo: 'foo', bar: function () { return this.foo; } };
var obj = Object.create(prototype);
console.log(obj.foo);   // foo
console.log(obj.bar()); // foo
prototype.foo = "bar";
console.log(obj.foo);   // bar
Object.prototype.breakingLibraries = 'foo';
console.log(obj.breakingLibraries);       // foo
console.log(prototype.breakingLibraries); // foo

// Pseudo-classical inheritance
function Foo(id, name) {
   this.id = id;
   this.name = name;
}
var foo = new Foo(1, 'foo');
console.log(foo.id); // 1

Foo.prototype.bar = 'bar';
console.log(foo.bar); // bar

// Setting an Object's prototype
const anyObj = {
   hello() {
      console.log(`this.foo is ${this.foo}`);
   },
};
let objWithProto = Object.create(anyObj);
objWithProto.foo = 'bar';
objWithProto.hello(); // "this.foo is bar"

let objInheritingObject = {};
let objInheritingNull = Object.create(null);
'toString' in objInheritingObject; // true
'toString' in objInheritingNull ; // false

let obj = Object.create({foo: 'foo'});
obj = Object.setPrototypeOf(obj, {bar: 'bar'});
obj.foo; // undefined
obj.bar; // "bar"
