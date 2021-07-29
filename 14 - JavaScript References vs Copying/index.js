//? start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = "Mehmet";
let surname = "Mutlu";
console.log(name, surname);
name = surname;
console.log(name, surname);

//? Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

//? and we want to make a copy of it.
const team = players;
console.log(players, team);

//? You might think we can just do something like this:
team[3] = "Lux";
console.log(players, team);

//* however what happens when we update that array?

//* now here is the problem!

//* oh no - we have edited the original array too!

//* Why? It's because that is an array reference, not an array copy. They both point to the same array!

//? So, how do we fix this? We take a copy instead!
const team2 = players.slice();

//? one way
const team5 = Array.from(players);

//? or create a new array and concat the old one in
const team3 = [].concat(players);

//? or use the new ES6 Spread
const team4 = [...players];

//? now when we update it, the original one isn't changed
team4[3] = "John";
console.log(players, team4);

//* The same thing goes for objects, let's say we have a person object

//? with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

//? and think we make a copy:
const captain = person;
captain.number = 99;
console.log(person, captain);

//? how do we take a copy instead?
const captain2 = Object.assign({}, person, { number: 19 });
console.log(person, captain, captain2);

//? We will hopefully soon see the object ...spread (NOW IT IS WORKING :) )
const captain3 = {...person}
captain3.number = 5
console.log(captain3);

//? Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const mehmet = {
  name: "mehmet",
  age: 24,
  social: {
    linkedin: "mehmettmutlu",
    instagram: "_mehmetmutluu"
  }
}
console.log(mehmet);

const mutlu1 = Object.assign({}, mehmet);
mutlu1.age = 30;
mutlu1.social.linkedin = "mutlu"
console.log(mutlu1);
 
const mutlu2 = {...mehmet}
mutlu2.age = 40;
mutlu2.social.linkedin = "mehmett"
console.log(mutlu2);

//! Cheating way (might cause performance issues)
const dev = JSON.parse(JSON.stringify(mehmet));
dev.social.linkedin = "newLink"
console.log(dev);
