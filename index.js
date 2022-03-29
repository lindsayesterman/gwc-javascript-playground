//console

console.log("Lindsay")

console.log(5/2)

//variables 

var name = "Lindsay"
console.log(name)

name = "Alyssa"
console.log(name)

var age = 18

var goodDeveloper = true

//concatenation

console.log("Hey, my name is " + name + " and I'm " + age + " years old." )


//if else statements 

var favColor = prompt("What's your fav color?")

console.log(favColor)

var favColorLC = favColor.toLowerCase()

// || stand for OR , && stands for and

if (favColorLC == "red" || favColorLC == "green") {
  console.log("You like Christmas colors.")
} else if (favColorLC == "yellow"){
  console.log("I like yellow also!")
} else {
  console.log("Interesting color.")
}

//functions 

var area; 

function calculateAreaTriangle () {
  var base = 2;
  var height = 3;
  area = (1/2)*base*height;
}

calculateAreaTriangle()
console.log(area)

function printFavPizza (type, toppings) {
  console.log("Fav type is " + type + " and fav topping is " + toppings)
}

printFavPizza("cheese", "pepperoni")
