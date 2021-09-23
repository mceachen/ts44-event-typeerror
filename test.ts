import { addListener, env, exit, pid, stdout } from "process";

addListener("SIGINT", (evt) => {
  console.log("caught SIGINT", evt);
});

console.log("GREAT SUCCESS")