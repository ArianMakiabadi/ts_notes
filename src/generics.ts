//! we use generics in functions, classes and interfaces

//* we use placeholders in functions to avoid dupplication

function getArray<T>(items: T[]): T[] {
  // T is a placeholder
  //optional constraints =>  <T extends string | number> instead of <T> in function decleration
  return new Array().concat(items);
}

getArray<number>([1, 2, 3]); // if you don't write <number> it still detects it and works however, it now accepts strings as well
getArray<string>(["A", "B", "C"]);

//? key of constarint
// we want to only allow they keys of the passed obj
function getProperty<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

const user = { name: "Arian", id: 1 };
getProperty(user, "id"); // we are only allowed to write name or id as keys, other random values are not allowed
