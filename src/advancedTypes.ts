//? type guards

//* 1. type of ==> used for primitive types
type StringOrNumber = string | number;
function processInput(x: StringOrNumber) {
  // if i type x. it will only show me the methods that are shared between strings and numbers
  // therefore we have to check the types before using specific methods
  if (typeof x === "string") return x.toUpperCase;
  if (typeof x === "number") return x.toFixed(2);
}

//* in operator ==> used for objects

interface Circle {
  radius: number;
}

interface Rectangle {
  width: number;
  length: number;
}

interface Square {
  sideLength: number;
}

type Shape = Circle | Rectangle | Square;
function calcArea(shape: Shape) {
  if ("radius" in shape) return Math.PI * shape.radius ** 2;
  if ("width" in shape && "length" in shape) return shape.width * shape.length;
  if ("sideLength" in shape) return shape.sideLength ** 2;
}

//* instanceof ==> only used for classes, not interfaces

class Cat {
  purr() {
    console.log("Meow!");
  }
}

class Dog {
  bark() {
    console.log("Woof!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) animal.bark;
  else animal.purr;
}
