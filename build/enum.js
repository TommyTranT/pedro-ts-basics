"use strict";
// make a custom type
var Cheese;
(function (Cheese) {
    Cheese["cheddar"] = "cheddar";
    Cheese["gouda"] = "gouda";
})(Cheese || (Cheese = {}));
// void means my function isnt going to return anything
const serveCheese = (cheeseType, serving) => {
    console.log(`You want ${serving} serving of ${cheeseType}`);
};
serveCheese(Cheese.cheddar, 3);
