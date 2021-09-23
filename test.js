"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = require("process");
process_1.addListener("SIGINT", function (evt) {
    console.log("caught SIGINT", evt);
});
console.log("GREAT SUCCESS");
