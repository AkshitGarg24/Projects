import fs from "fs/promises";

fs.writeFile("Abc.txt","Hello");
let a = fs.readFile("Abc.txt")
console.log(a);