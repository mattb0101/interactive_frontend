
describe("whatICanDrink", function() {
    describe("Age Tests", function() {
        it("Should Return Drink Toddy", function() {
            expect(whatCanIDrink(12)).toBe("Drink Toddy");
        });
         it("Should Return Drink Coke", function() {
            expect(whatCanIDrink(14)).toBe("Drink Coke");
        });
        it("Should Return Drink Beer", function() {
            expect(whatCanIDrink(18)).toBe("Drink Beer");
        });
        it("Should Return Drink Whiskey", function() {
            expect(whatCanIDrink(54)).toBe("Drink Whiskey");
        });
        it("Should return a statement if age is over 130", function() {
            expect(whatCanIDrink(131)).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
        });
        it("Should return a statement if age is less than 0", function() {
            expect(whatCanIDrink(-5)).toBe("Sorry. I can't tell you what to drink because that age is incorrect!");
        });
        it("Should return an error if value is not a number", function() {
            expect(whatCanIDrink("None of your Business")).toBe("Error!");
        });
    });
});


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