const fs = require('fs');

const text = fs.readFileSync("input.txt", 'utf-8');

const arr = text.split("\n");
let sum = 0;
for(let x of arr) {
  sum+=Number(x.split(" ")[1]);
}
fs.writeFileSync("output.txt", sum+"");