/*
---------------------------------------------------------------------------
Objects - Part One
*/

// Do not modify this object here.
let person = {
  firstName: "Homer",
  lastName: "Simpson",
  hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
  address: {
    number: 742,
    street: "Evergreen Terrace",
    city: "Springfield",
    state: "Illinois",
    zipcode: "12345",
  },
};

/*
  Complete all of the following exercises using the Person Object above.
  Put all of your code inside the function for each exercise.
*/
/*
---------------------------------------------------------------------------
Exercise One

Print out (using console.log()) the persons first and last name.

There should be a space between the two names, for example:
"John Doe"


Notice how the given function has one argument person.
Then when the function is called:
printTheirName(person);
The person object is passed in as a parameter. 

This will allow each function to be called with different people.

The `person` inside the function refers to the argument.
However, the person outside of the function refers to the variable
at the top of the file. 
*/
console.log("1) - Print their name"); // These console.log lines are to help with grading, ignore them.

function printTheirName(person) {
  /* 
  Your code goes below
  */
  console.log(`${person.firstName} ${person.lastName}`);
}
printTheirName(person);

/*
---------------------------------------------------------------------------
Exercise Two

Print out all of their hobbies.

Don't just access each individual hobby in the array,
use a loop to access the hobby array, printing each item!
*/
console.log("2) - Print their Hobbies");

function printTheirHobbies(person) {
  /* 
  Your code goes below
  */
  for (let hobby of person.hobbies) console.log(hobby);
}
printTheirHobbies(person);

/*
---------------------------------------------------------------------------
Exercise Three

Print out their entire Shipping address in the standard format.
It should look like this:

Homer Simpson
742 Evergreen Terrace
Springfield, Illinois 12345

Remember that there are three lines to this!  
Your output should not be all on one line... 

Hint: Use a template literal to do this easily!
https://flaviocopes.com/javascript-template-literals/
*/
console.log("3) - Print their Shipping Address");

function printTheirShippingAddress(person) {
  /* 
  Your code goes below
  */
  console.log(`${person.firstName} ${person.lastName}
${person.address.number} ${person.address.street} 
${`${person.address.city}, ${person.address.state} ${person.address.zipcode}`}`);
}
printTheirShippingAddress(person);

/*
---------------------------------------------------------------------------
Exercise Four

Add a phone number to the person object. 

Set the value as a string.  Use whatever number you wish.

Then, print out the person object. 
*/
console.log("4) - Add a phone number and print the person");

function addPhoneNumber(person) {
  /* 
  Your code goes below
  */
  person.phone = "(123-456-7890)";
  console.log(person);
}
addPhoneNumber(person);

/*
---------------------------------------------------------------------------
Exercise Five

Create a new person.  

Make a new variable inside the function.
Create a new object and assign it to that variable.

That object should contain:

a first name
a last name
a hobbies array with at least 3 items
an address object which should contain
  a street number
  a street name
  a city
  a state
  a zipcode

Your object should look very similar to the Person object above!
But you should use different values.  Put whatever you want for the values.

return the person object from your function.
*/
console.log("5) - Create Person");

function createPerson() {
  /* 
  Your code goes below
  */
  let person2 = {
    firstName: "Riley",
    lastName: "Freeman",
    hobbies: ["Stacking paper", "Chasing the bag", "Fundraising"],
    address: {
      number: 555,
      street: "Timid Deer Lane",
      city: "Woodcrest",
      state: "Maryland",
      zipcode: "21244",
    },
  };
  return person2;
}

console.log(createPerson());
/*
---------------------------------------------------------------------------
Objects - Part Two
*/

// Do not modify this array.
let people = [
  {
    firstName: "Homer",
    lastName: "Simpson",
    occupation: "Nuclear Safety Inspector",
    age: 39,
    hobbies: ["Television", "Eating Donuts", "Playing with his Kids"],
    address: {
      number: 742,
      street: "Evergreen Terrace",
      city: "Springfield",
      state: "Illinois",
      zipcode: "12345",
    },
  },
  {
    firstName: "Marge",
    lastName: "Simpson",
    occupation: "Housewife",
    age: 36,
    hobbies: ["Television", "Playing with her Kids", "Gardening"],
    address: {
      number: 742,
      street: "Evergreen Terrace",
      city: "Springfield",
      state: "Illinois",
      zipcode: "12345",
    },
  },
  {
    firstName: "Ned",
    lastName: "Flanders",
    occupation: "Entrepreneur",
    age: 60,
    hobbies: ["Bible Study", "Spying on the Simpsons", "Gardening"],
    address: {
      number: 744,
      street: "Evergreen Terrace",
      city: "Springfield",
      state: "Illinois",
      zipcode: "12345",
    },
  },
  {
    firstName: "Apu",
    lastName: "Nahasapeemapetilon",
    occupation: "Kwik-E-Mart Owner",
    age: 43,
    hobbies: ["Selling Snacks", "Television", "Gardening"],
    address: {
      number: 123,
      street: "Fake Lane",
      city: "Springfield",
      state: "Illinois",
      zipcode: "54321",
    },
  },
];

/*
  Complete all of the following exercises using the Person Object above.
  Put all of your code inside the function for each exercise.
*/
/*
---------------------------------------------------------------------------
Exercise Six

Print out the name of every person in the array.

This should print the first and last name!
Hint: You can use your function from Exercise One!
if you call printTheirName(), but pass in a different person's object as the parameter, 
then it will print that person's name.
For example: printTheirName(people[i])

You should use a loop to access each person in the array.

Do NOT just hardcode people[1], people[2], etc...
*/
console.log("6) - Print everyone's names");

function printEveryonesNames(people) {
  for (let i = 0; i < people.length; i++) {
    console.log(`${people[i].firstName} ${people[i].lastName}`);
  }
}
printEveryonesNames(people);

/*
---------------------------------------------------------------------------
Exercise Seven

Print the hobbies of everyone who is older than 40.

Hint: Use a loop to iterate through the array of people.
Then check their age.
If they are greater than 40 years old
then print their hobbies.

Again, you can use your function from above, printTheirHobbies(person),
to make this easier!
*/
console.log("7) - Print hobbies > 40 years old");

function printHobbiesOver40(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].age > 40) {
      console.log(people[i].hobbies);
    }
  }
}
printHobbiesOver40(people);

/*
---------------------------------------------------------------------------
Exercise Eight

Print the first name of each person who lists "gardening" as a hobby.

Again, use a loop to iterate through the array of people.
For each person
  if they like gardening
    print their name


There are a few different ways to determine if their hobby array contains gardening.
You could loop through the hobby array, or you could use an array function!  
There are several array functions which would apply.
*/
console.log("8) - Print names of whoever likes gardening");

function printNamesOfGardeners(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].hobbies.includes("Gardening")) {
      console.log(`${people[i].firstName} ${people[i].lastName}`);
    }
  }
}
printNamesOfGardeners(people);

/*
---------------------------------------------------------------------------
Exercise Nine

Using your createPerson() function from exercise five,
create a new person and add them to the people array.

Then log the people array to the console.
*/
console.log("9) - Add Person");

function addPerson(people) {
  people.push(createPerson());
  console.log(people);
}
addPerson(people);

/*
---------------------------------------------------------------------------
OPTIONAL BONUS - Exercise Ten

Create your own object!

Create a variable and assign an object to it.

Your job is to design an object that will represent a dog.

What properties should a dog have on it?

A name? A breed?  You decide!

Create at least 10 different properties on your dog object and give them all values.

At least one property must have a boolean value
At least one property must have a number value
At least one property must be an array of other values. 
At least one property must be another object. (like the address property in the person object above.)

When you are done, log your dog object to the console.
*/
console.log("BONUS - 10) - Create a dog object");

let pet = {
  name: "Ava",
  breed: "English BullDog",
  age: 14,
  birthplace: "Indianapolis, IN",
  currentHome: "Bradenton, FL",
  colorOfFur: "brown and white",
  tempermant: "calm",
  owner: {
    name: "Monika",
    age: 46,
    address: "Florida, USA",
    phone: "(317,555,5555)",
  },
  hobbies: ["laying down, barking into the void, chasing balls"],
  likesLongWalks: false,
};
console.log(pet);
