const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log("Hi my name is", "Mehmet");

// Styled
console.log("%c Hi guys!", "font-size: 50px;");

// warning!
console.warn("OH NOO!");

// Error :|
console.error("Shit!");

// Info
console.info("You should rest your eyes!");

// Testing
console.assert(1 === 1, "That is wrong!");
console.assert(1 === 2, "That is wrong!");

const p = document.querySelector("p");
console.assert(p.classList.contains("asdasd"), "There is no class name like that in classList.");

// clearing
//console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}.`);
  console.log(`This is ${dog.age} years old.`);
  console.groupEnd(`${dog.name}`)
})

// counting
console.count("Mehmet");
console.count("Mutlu");
console.count("Mehmet");
console.count("Mutlu");
console.count("Mehmet");
console.count("Mutlu");
console.count("Mehmet");

// timing
console.time("Fetching data");
fetch("http://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("Fetching data");
    console.log(data);
  })

// table
console.table(dogs)
