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
