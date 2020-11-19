// Switch
var animal = 'Lion';
switch (animal) {
   case 'Dog':
      console.log('I will not run since animal !== "Dog"');
      break;
   case 'Cat':
      console.log('I will not run since animal !== "Cat"');
      break;
   default:
      console.log('I will run since animal does not match any other case');
}

// Switch
function john() {
   return 'John';
}

function jacob() {
   return 'Jacob';
}

switch (name) {
   case john(): // Compare name with the return value of john() (name == "John")
      console.log('I will run if name === "John"');
      break;
   case 'Ja' + 'ne': // Concatenate the strings together then compare (name == "Jane")
      console.log('I will run if name === "Jane"');
      break;
   case john() + ' ' + jacob() + ' Jingleheimer Schmidt':
      console.log('His name is equal to name too!');
      break;
}

// Switch Multiple
var x = "c"
switch (x) {
   case "a":
   case "b":
   case "c":
      console.log("Either a, b, or c was selected.");
      break;
   case "d":
      console.log("Only d was selected.");
      break;
   default:
      console.log("No case was matched.");
      break; // precautionary break if case order changes
}

// If, else if
var i = 0;
if (i < 1) {
   console.log("i is smaller than 1");
} else if (i < 2) {
   console.log("i is smaller than 2");
} else {
   console.log("none of the previous conditions was true");

// Strategy
function makeAnimalSpeak (animal) {
   // Match the animal by type
   const speak = AnimalSays[animal] || AnimalSays.default;
   console.log(animal + ' says ' + speak());
}

makeAnimalSpeak('dog') // => 'dog says woof'
makeAnimalSpeak('cat') // => 'cat says meow'
makeAnimalSpeak('lion') // => 'lion says roar'
makeAnimalSpeak('snake') // => 'snake says moo'
