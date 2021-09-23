"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var process_1 = __importDefault(require("process"));
process_1.default.addListener("SIGINT", function (evt) {
    console.log("caught SIGINT", evt);
});
console.log("GREAT SUCCESS");
