describe("fizzBuzz", function() {
    describe("Number Tests", function() {
        it("Should return Fizz", function() {
            expect(fizzBuzz(6)).toBe("Fizz");
        });
        it("Should return Buzz", function() {
            expect(fizzBuzz(10)).toBe("Buzz");
        });
        it("Should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("Should return number", function() {
            expect(fizzBuzz(11)).toBe(11);
        });
        it("Should return an error", function() {
            expect(fizzBuzz("chicken")).toBe("Not a number!");
        });
    });
});

// describe("My fizzBuzz function", function() {
//     // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    
//     beforeEach(function() {
//         fizzbuzz = new fizzBuzz();
//     });
    
//     describe("Returns number, fizz, buzz or fizzbuzz", function() {
//         // Specs are defined by calling the global Jasmine function it
//         it("should exist", function() {
//             // Expectations are built with the function expect which takes a value, called the actual. 
//             // Each matcher implements a boolean comparison between the actual value and the expected value.
//             // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
//             expect(fizzBuzz).toBeDefined();
//         });
        
//         it("should return Fizz when called as fizzBuzz(9)", function() {
//             var result = fizzBuzz(9)
//             expect(result).toBe("Fizz");
//         });
                
//         it("should return Buzz when called as fizzBuzz(10)", function() {
//             var result = fizzBuzz(10)
//             expect(result).toBe("Buzz");
//         });
        
//         it("should return FizzBuzz when called as fizzBuzz(15)", function() {
//             var result = fizzBuzz(15)
//             expect(result).toBe("FizzBuzz");
//         });
//         it("should return 2 when called as fizzBuzz(2)", function() {
//             var result = fizzBuzz(2)
//             expect(result).toBe(2);
//         });
//     });
// });


// Tests for drinking age
// describe("whatICanDrink", function() {
//     describe("Age Tests", function() {
//         it("Should Return Drink Toddy", function() {
//             expect(whatCanIDrink(12)).toBe("Drink Toddy");
//         });
//          it("Should Return Drink Coke", function() {
//             expect(whatCanIDrink(14)).toBe("Drink Coke");
//         });
//         it("Should Return Drink Beer", function() {
//             expect(whatCanIDrink(18)).toBe("Drink Beer");
//         });
//         it("Should Return Drink Whiskey", function() {
//             expect(whatCanIDrink(54)).toBe("Drink Whiskey");
//         });
//         it("Should return a statement if age is over 130", function() {
//             expect(whatCanIDrink(131)).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
//         });
//         it("Should return a statement if age is less than 0", function() {
//             expect(whatCanIDrink(-5)).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
//         });
//         it("Should return an error if value is not a number", function() {
//             expect(whatCanIDrink("None of your Business")).toBe("Error!");
//         });
//     });
// });


// Test for Calculator
// describe("Calculator", function() {

//     beforeEach(function() {
//         calc = new Calculator;
//     });

//     describe("Addition tests", function(){
//         it("should return 42", function() {
//             calc.add(20);
//             calc.add(22);
//             expect(calc.value).toBe(42);
//         });
//         it("should return 26", function() {
//             calc.add(9);
//             calc.add(17);
//             expect(calc.value).toBe(26);
//         });
//         it("should return an error if we don't supply two numbers", function(){
//             spyOn(window, "alert");
//             calc.add("Hitchhikers");
//             expect(window.alert).toHaveBeenCalledWith("Error!");
//         });
//     });
// });