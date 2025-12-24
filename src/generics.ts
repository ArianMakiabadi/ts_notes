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

//* Generic utility types
//? partial constraint
// we use them when we don't need all the predefiend properties, some of them might be undefiend

interface Person {
  name: string;
  age: number;
  email: string;
}

//! Don't do this:
// interface PartialPerson {
//   name?: string;
//   age?: number;
//   email?: string;
// }

//! Instead use Partial:
type PartialPerson = Partial<Person>;

//? required constraint => the opposite of partial => it makes optional properties, required

type Person2 = {
  name?: string;
  age?: number;
  email?: string;
};

type RequiredPerson = Required<Person2>;

//? Omit constraint => create a new type based on the previous ones without a specific property
type PersonWithoutEmail = Omit<Person, "email">;

//? Pick => create a new type based on the previous ones by picking the properties that you need
type PersonWithEmailAndName = Pick<Person, "name" | "email">;
