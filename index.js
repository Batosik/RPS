import readlineSync from 'readline-sync/lib/readline-sync.js';
import getRandom from './getRandom.js';

let count = [0, 0];

const rps = (count) => {
  let currantUserCount = count[1];
  let currantCompCount = count[0];
  const userChoice = readlineSync.keyInSelect(tools, 'Choose any');
  console.log(`Ok, ${tools[userChoice]} is your choice.`);
  const compChoice = getRandom();
  console.log(tools[compChoice]);
  if (compChoice === userChoice) {
    console.log("A draw. Let's play again");
  } else if (userChoice - 1 === compChoice || userChoice + 2 === compChoice) {
    currantUserCount += 1;
    console.log(`You win!\nComputer: ${currantCompCount}. User: ${currantUserCount}!`);
  } else {
    currantCompCount += 1;
    console.log(`You lose!\nComputer: ${currantCompCount}. User: ${currantUserCount}!`);
  }
  count[1] = currantUserCount;
  count[0] = currantCompCount;
  return count
};

console.log("Let's play rock-paper-scissors");

const tools = ['Rock', 'Paper', 'Scissors'];

rps(count);

console.log('Play til three wins');

while (count[0] < 4 || count[1] < 4) {
  rps(count);
  if (count[0] === 3) {
    console.log("Let's try again");
    break;
  } else if (count[1] === 3) {
    console.log('My congratulations!');
    break;
  }
}
