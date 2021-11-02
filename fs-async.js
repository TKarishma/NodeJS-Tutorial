const {readFile, writeFile} = require('fs');

console.log("Start");
readFile('./content/first.txt', 'utf-8', (err, result) =>{
    if(err){
        console.log(err);
        return;
    }
    first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        second = result;
        writeFile('./content/result-sync.txt', 
        `hello ${first}, ${second}`,
        (err, result) =>{
            if(err){
                console.log(err);
                return;
            }
            console.log("Done with this task");
        })
    })
})

console.log("Starting with 2nd task");
