//timer1.js

//edge cases we need to think about 
//no numbers are provided - there should be no beep and end immediately
//an input is a neg number, skip and ignore
//an input is not a number, skip as well. 

//process.stdout.write('\x07'); for beeping 
//get the arguments separated 
const args = process.argv.slice(2);

//creating for loop to do timer for each number inputted if the timeDelay turns to false because 1000 x a letter is Nan === false it won't do the time delay
for (let arg of args) {
  let timeDelay = arg * 1000;
  if (timeDelay && timeDelay > 0) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, timeDelay);

  }
  // console.log(timeDelay)

}

