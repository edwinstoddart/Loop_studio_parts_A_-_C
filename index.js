//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

const input = require('readline-sync');
let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetables = ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let liquid = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];
let pantry = [protein, grain, vegetables, liquid, dessert];
let meal = [[], [], [], [], [], []];
let num = 0;

//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.

/*
for (let i = 0; i < meal.length; i++) {
  for (let i1 = 0; i1 < pantry.length; i1++) {
    meal[i][i1] = pantry[i1][i];
  }
  console.log(`Meal #${i + 1} consists of:
  ${meal[i][0]}, ${meal[i][1]}, ${meal[i][2]}, ${meal[i][3]}, and ${meal[i][4]}`);
}
*/

//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.
num = Number(input.question('Hello! How many meals would you like prepared? We can prepare up to 6 meals:\n'));

while (num > 6 || num < 1) {
  num = Number(input.question("I'm sorry, that entry is outside of our meal planning range. Please enter a number between 1 and 6:\n"))
}

console.log(`Thank you! You have entered ${num} meals, we will prepare them immediately!`);
i = 0;
while (i < num) {
  for (i1 = 0; i1 < pantry.length; i1++) {
    meal[i][i1] = pantry[i1][i];
  }
  console.log(`Meal #${i + 1} consists of:
  ${meal[i][0]}, ${meal[i][1]}, ${meal[i][2]}, ${meal[i][3]}, and ${meal[i][4]}`);

  if (meal[i].includes('kale')) {
    console.log('(Don’t worry, you can have double chocolate tomorrow.)');
  }
  i++;
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”