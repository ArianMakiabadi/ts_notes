"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(x) {
    if (typeof x === "string")
        return x.toUpperCase;
    if (typeof x === "number")
        return x.toFixed(2);
}
function calcArea(shape) {
    if ("radius" in shape)
        return Math.PI * shape.radius ** 2;
    if ("width" in shape && "length" in shape)
        return shape.width * shape.length;
    if ("sideLength" in shape)
        return shape.sideLength ** 2;
}
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
function makeSound(animal) {
    if (animal instanceof Dog)
        animal.bark;
    else
        animal.purr;
}
function isFish(animal) {
    return animal.swim !== undefined;
}
function checkAnimal(animal) {
    if (isFish(animal)) {
        console.log(typeof animal);
        animal.swim;
    }
    else {
        animal.fly;
    }
}
const fish = {
    swim() {
        console.log("swimming");
    },
};
checkAnimal(fish);
