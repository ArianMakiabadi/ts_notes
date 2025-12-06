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
