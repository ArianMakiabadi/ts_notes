"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userTuple = ["Alice", 30];
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
const taskStatus = Status.InProgress;
let id = 42;
id = "42";
let currentTheme = "light";
var Role;
(function (Role) {
    Role["Admin"] = "ADMIN";
    Role["User"] = "USER";
})(Role || (Role = {}));
function login(username, password) {
    if (username === "admin" && password === "1234") {
        return [true, "Login successful"];
    }
    return [false, "Invalid credentials"];
}
function getUser(id) {
    return `Fetching user with ID: ${id}`;
}
function calculate(a, b, op) {
    return op === "add" ? a + b : a - b;
}
function authorize(role) {
    return role === Role.Admin ? "Access granted" : "Access denied";
}
function jsonParser(str) {
    return JSON.parse(str);
}
const parsedValue = jsonParser(`{"name":"Arian"}`);
console.log(parsedValue.name);
