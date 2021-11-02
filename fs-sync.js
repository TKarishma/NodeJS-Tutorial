const {readFileSync, writeFileSync} = require('fs');
console.log("Start");
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, "\n",second);

writeFileSync('./content/result.txt', `Hello World ${first}`, {flag: 'a'});
writeFileSync('./content/sub/result.txt', `Hello world in ${second} sub `)
console.log("Done");

console.log("Starting the next one");