import process from "process";

process.addListener("SIGINT", (evt) => {
  console.log("caught SIGINT", evt);
});

console.log("GREAT SUCCESS")