function whatCanIDrink(age) {
    if (age < 0) {
        return "Sorry. I can't tell you what to drink because that age is incorrect!";
    } else if (age < 14) {
        return "Drink Toddy";
    } else if (age < 18 && age >=14){
        return "Drink Coke";
    } else if (age < 21 && age >=18) {
        return "Drink Beer";
    } else if (age < 130 && age >=21) {
        return "Drink Whiskey";
    } else if (age > 130) { 
        return "Sorry. I can't tell you what to drink because that age is incorrect!";
    } else {   
        return "Error!";
    } 
}


// Updated with Running Total
// Calculator = function() {
//     this.value = 0;
// }

// Calculator.prototype.add = function(number) {
//     if (typeof(number) == "number") {
//         this.value += number;
//     } else {
//         alert("Error!");
//     }
// }




// first Iteration
// function addition(numOne, numTwo) {
//     if(typeof(numOne) == "number" && typeof(numTwo) == "number") {
//         return numOne + numTwo;
//     } else {
//         alert("Error!");
//     }
// }