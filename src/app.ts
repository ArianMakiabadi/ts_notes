//? Basic types

/* ---------- TUPLE ---------- */
// A tuple is a fixed-length array with typed positions.
const userTuple: [string, number] = ["Alice", 30];
//    [0] -> string, [1] -> number

/* ---------- ENUM ---------- */
// Enums create a set of named constants.
enum Status {
  Pending, // 0
  InProgress, // 1
  Done, // 2
}
const taskStatus: Status = Status.InProgress;

/* ---------- UNION ---------- */
// Union allows a variable to be one of several types.
let id: number | string = 42;
id = "42"; // also valid

/* ---------- LITERAL TYPES ---------- */
// Literal types restrict a value to specific exact values.
type Theme = "light" | "dark";
let currentTheme: Theme = "light";
// currentTheme = "blue"; // ❌ Not allowed

//? Functions

/* ---------- ENUM ---------- */
enum Role {
  Admin = "ADMIN",
  User = "USER",
}

/* ---------- FUNCTION USING TUPLE ---------- */
// Returns a tuple: [success, message]
function login(username: string, password: string): [boolean, string] {
  if (username === "admin" && password === "1234") {
    return [true, "Login successful"];
  }
  return [false, "Invalid credentials"];
}

/* ---------- FUNCTION USING UNION ---------- */
// Accepts ID as number or string
function getUser(id: number | string) {
  return `Fetching user with ID: ${id}`;
}

/* ---------- FUNCTION USING LITERAL TYPES ---------- */
// Only allows specific operation values
type Operation = "add" | "subtract";

function calculate(a: number, b: number, op: Operation) {
  return op === "add" ? a + b : a - b;
}

/* ---------- USING ENUM IN A FUNCTION ---------- */
function authorize(role: Role) {
  return role === Role.Admin ? "Access granted" : "Access denied";
}

//!.........................................
// The return of JSON.parse is any by default which is bad, it let's you call parsedValue.email without
// throwing an error even when it doesn't exist
function jsonParser(str: string): unknown {
  return JSON.parse(str);
}

//if we don't define the type UserName, we cannot access parsedValue.name because the type of parsedValue is unknown
type UserName = { name: string };
const parsedValue = jsonParser(`{"name":"Arian"}`) as UserName;

console.log(parsedValue.name);
// parsedValue.email; it gives an error
//!.........................................
