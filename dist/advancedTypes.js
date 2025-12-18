"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(x) {
    if (typeof x === "string")
        return x.toUpperCase;
    if (typeof x === "number")
        return x.toFixed(2);
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
function calcArea(shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.length * shape.width;
        case "square":
            return shape.sideLength ** 2;
    }
}
