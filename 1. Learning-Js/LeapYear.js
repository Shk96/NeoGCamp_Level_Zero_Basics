// Leap Year Function
// Using Chalk function  


var readlineSync = require("readline-sync");
const chalk = require('chalk');

var userName  = readlineSync.question(chalk` {blue.bold Whats your name? }`)
console.log("\n");

alert(chalk` {bold Hello} {red.bold ${userName}}, {bold.green Lets see if you were born \n in a leap year.  }`)
console.log("\n");

var confirm = readlineSync.keyInYN (chalk ` {bold.green Do you want to Proceed ?}`) 
console.log("\n");

var yob =  prompt(chalk` {bold.white Enter your year of Birth}`, "YY");
console.log("\n");

console.log(chalk `{yellow  You Entered:} {red ${yob}}`)
console.log("\n");

function leapyyear (yob){
   if (yob % 100 === 0 || yob % 400 === 0 || yob % 4 === 0) {
      alert(chalk `{green.bold ${yob}} {bold is a leap year}. {blue.bold Share this on your social media!}` )  
   } else {
     alert(chalk `{green.bold  ${yob}} {bold is not a leap year \n} {blue.bold Share this on your social media!}  ` )
   }  
}

alert(leapyyear(yob))

