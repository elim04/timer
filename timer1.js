//timer1.js

//edge cases we need to think about 
//no numbers are provided - there should be no beep and end immediately
//an input is a neg number, skip and ignore
//an input is not a number, skip as well. 

//process.stdout.write('\x07'); for beeping 

const args = process.argv
//get the arguments separated 
const finalArgs = process.argv.slice(2);
let numArgs = [];
let cleanArgs = [];

// convert args to numbers 
for (let arg of finalArgs) {
  numArgs.push(Number(arg));
}

//making sure only numbers are in array now
for (let arg of numArgs) {
  if (Number.isInteger(arg) && arg > 0) {
    cleanArgs.push(arg);
  }
}
console.log(cleanArgs)
//sort them so you can follow the order of beeps

let sortedArgs = cleanArgs.sort((a, b) => a - b);
console.log(sortedArgs)

//creating for loop to do timer for each number inputted
for (let arg of sortedArgs) {
  
  let timeDelay = arg * 1000;
  console.log(timeDelay)
  setTimeout(() => {
    process.stdout.write('\x07')
  }, timeDelay);

}

