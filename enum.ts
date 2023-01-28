// make a custom type
enum Cheese {
  cheddar = "cheddar",
  gouda = "gouda",
}

// void means my function isnt going to return anything
const serveCheese = (cheeseType: Cheese, serving:number): void => {
  console.log(`You want ${serving} serving of ${cheeseType}`)
}

// Cheese can only be "gouda" or "cheddar"
serveCheese(Cheese.cheddar, 3);
