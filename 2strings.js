var hello = "Hello";
var world = "world";
var helloW = "Hello World";

var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

var intString = (5232).toString(); // "5232"
var booleanString = (false).toString(); // "false"
var objString = ({}).toString(); // "[object Object]"

var objectString = new String("Yes, I am a String object");
typeof objectString;//"object"
typeof objectString.valueOf();//"string"

var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // =>9 "Foo Bar"
foo.concat(bar) // => "FooBar"
"a".concat("b", " ", "d") // => "ab d"

var string = "string";
var number = 32;
var boolean = true;
console.log(string + number + boolean); // "string32true"

var string = "Hello, World!";
console.log( string.charAt(4) ); // "o"

var string = "Hello, World!";
console.log( string[4] ); // "o"

var string = "Hello, World!";
console.log( string.charCodeAt(4) ); // 111

var text = 'L\'albero means tree in Italian';
console.log( text ); \\ "L'albero means tree in Italian"

var s = "one, two, three, four, five"
s.split(", "); // ["one", "two", "three", "four", "five"]
s.split(", ").join("--"); // "one--two--three--four--five"

var aString = "my string";
var anInt = 5;
var anObj = {};
typeof aString === "string"; // true
typeof anInt === "string"; // false
typeof anObj === "string"; // false

var s = "0123456789abcdefg";
s.slice(0, 5); // "01234"
s.slice(5, 6); // "5"

var string = "Hello, World!";
console.log( string.indexOf("o") ); // 4
console.log( string.indexOf("foo") ); // -1
console.log( string.lastIndexOf("o") ); // 8
console.log( string.lastIndexOf("foo") ); // -1
console.log( string.includes("Hello") ); // true
console.log( string.includes("foo") ); // false
string = string.replace( "Hello", "Bye" );
console.log( string ); // "Bye, World!"
string = string.replace( /W.{3}d/g, "Universe" );
console.log( string ); // "Bye, Universe!"

console.log('qwerty'.toUpperCase()); // 'QWERTY'
console.log('QWERTY'.toLowerCase()); // 'qwerty'

"abc".repeat(3); // Returns "abcabcabc"
"abc".repeat(0); // Returns ""
"abc".repeat(-1); // Throws a RangeError

var myString = "abc";
var n = 3;
new Array(n + 1).join(myString); // Returns "abcabcabc"
