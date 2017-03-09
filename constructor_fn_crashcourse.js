// constructor function
function Dog(name, owner) {
  this.legs = 4
  this.name = name
  this.owner = owner
  this.smell = "Clean"
  this.mood = "Calm"
}

// create Molly
let molly = new Dog("Molly", "Carlos")
  // creates an empty object
  // gives that object to the constructor fn (i.e. Dog())
  // Dog() then modifies that object
  // Dog() automatically returns this object

console.log(molly)

function play(dog) {
  dog.mood = "Happy"
  dog.smell = "Smells like Dog"
}

play(molly)
console.log(molly)

let iago = new Dog("Iago", "Berto")
iago.toy = "Chewed rabbit"
console.log(iago)
play(iago)
console.log(iago)

function wash(dog) {
  if (dog.smell !== "Clean") {
    console.log(dog.name, "gets a bath")
    dog.smell = "Clean"
    dog.mood = "Down"
  } else {
    console.log(dog.name, "does not need a bath")
  }
}

wash(iago)
console.log(iago)
wash(iago)
