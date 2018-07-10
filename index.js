/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */


let counter = 0;
const str1 = 'NO, NOT SINCE ';
print('What do you want to say to Grandma!!');
while (counter < 2) {
  const userinput = prompt();
  if (userinput === 'BYE') {
    print(str1 + getRandomValue(1930, 1950));
    counter += 1;
  } else if (isUppercase(userinput)) {
    print(str1 + getRandomValue(1930, 1950));
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
