'use strict';

for (let j = 0; j < process.argv.length; j++) {
  console.log(j + ' -> ' + (process.argv[j]));
}


/*
const roll = function(){
  let rollNumber = 1 + Math.floor(Math.random() * 6)
  console.log(rollNumber);
  return rollNumber;
}

const rollDice = function(num) {
  num = Number(process.argv[2])
  string = "";
  for(let i = 0; i < num; i++) {
    let rolls = roll();
    string += rolls + ", ";
  } console.log(`Rolled ${num} dice: ${string}`)
}

rollDice()
*/