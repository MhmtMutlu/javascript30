
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

//? Some and Every Checks
//* Array.prototype.some() // is at least one person 19 or older?

const date = new Date();
const year = date.getFullYear();
const someResult = people.some(person => year - person.year >= 19);
console.log({someResult});

//* Array.prototype.every() // is everyone 19 or older?

const everyResult = people.every(person => year - person.year >= 19);
console.log({everyResult});

//? Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const findComment = comments.filter(comment => comment.id === 823423).map(item => item.text);
console.log("Comment: ", findComment);

//? Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const indexOfComment = comments.findIndex(comment => comment.id === 823423);
console.log("Index of comment: ", indexOfComment);
// comments.splice(indexOfComment, 1);
// console.table(comments);
const newComments = [...comments.slice(0, indexOfComment), ...comments.slice(indexOfComment + 1)]
console.table(newComments)