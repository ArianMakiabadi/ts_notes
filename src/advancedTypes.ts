//? type guards

//* 1. type of ==> used for primitive types
type StringOrNumber = string | number;
function processInput(x: StringOrNumber) {
  // if i type x. it will only show me the methods that are shared between strings and numbers
  // therefore we have to check the types before using specific methods
  if (typeof x === "string") return x.toUpperCase;
  if (typeof x === "number") return x.toFixed(2);
}

//* 2. in operator ==> used for objects

// interface Circle {
//   radius: number;
// }

// interface Rectangle {
//   width: number;
//   length: number;
// }

// interface Square {
//   sideLength: number;
// }

// type Shape = Circle | Rectangle | Square;
// function calcArea(shape: Shape) {
//   if ("radius" in shape) return Math.PI * shape.radius ** 2;
//   if ("width" in shape && "length" in shape) return shape.width * shape.length;
//   if ("sideLength" in shape) return shape.sideLength ** 2;
// }

//*3. instanceof ==> only used for classes, not interfaces

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

//* 4. is operator => user-defiend method => to check complex types (user defiend)
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

type Animal = Fish | Bird;

//! *********************************************
//! The return of this function is boolean
//! However, if it returns true, ts will treat animal as Fish
function isFish(animal: Animal): animal is Fish {
  return (animal as Fish).swim !== undefined;
}
//! *********************************************

function checkAnimal(animal: Animal) {
  if (isFish(animal)) {
    //! it logs object, because type checking only happens during compilition
    //! JavaScript has no idea what Animal or Fish is, it just sees a normal object
    console.log(typeof animal);
    animal.swim;
  } else {
    animal.fly;
  }
}
const fish: Fish = {
  swim() {
    console.log("swimming");
  },
};
checkAnimal(fish);

//* 5. discriminated unions => combine union and literal types to create a new type (check point 2 and compare)
//* cannot be used in complex types

interface Circle {
  radius: number;
  type: "circle"; // it doesn't specifically have to be type, you can write kind or folan or...
}

interface Rectangle {
  width: number;
  length: number;
  type: "rectangle";
}

interface Square {
  sideLength: number;
  type: "square";
}

type Shape = Circle | Rectangle | Square;

function calcArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.length * shape.width;
    case "square":
      return shape.sideLength ** 2;
  }
}

//? Nullish coalescing ==> ??

// if we use || => if the values of userInput are "" or 0 or null or undefiend, it will concieder "default value"
// however if we use ?? instead of || => "" and 0 are valid values, if it's undefiend or null; it will consider "default value"
const userInput = "";
const processedData = userInput || "default value";
