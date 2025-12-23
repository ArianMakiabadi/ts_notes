"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArray(items) {
    return new Array().concat(items);
}
getArray([1, 2, 3]);
getArray(["A", "B", "C"]);
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: "Arian", id: 1 };
getProperty(user, "id");
