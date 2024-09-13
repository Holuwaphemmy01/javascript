const{sumEvenNumbers} = require("./even_numbers");
const{findMax} = require("./max");
const{countOddNumbers} = require("./question3");
const{isPrime} = require("./question4");
const{findFirstDuplicate} = require("./question5");
const{reverseArray} = require("./question6");
const{factorial} = require("./question7");
const{palindrome} = require("./question8");


let numberInArray = [9, 4, 24, 35, 31];

test("Sum of even number in array", ()=> {
	let result = sumEvenNumbers(numberInArray);
	expect(result).toBe(28);

})

test("Largest number in array", ()=> {
let numberInArray = [9, 4, 24, 35, 31];
	let result = findMax(numberInArray);
	expect(result).toBe(35);

})

test("Count odd number in an array", ()=> {
let numberInArray = [2, 6, 5, 7, 51, 26, 37];
let result = countOddNumbers(numberInArray);
expect(result).toBe(4);
	})


test("is prime number",  ()=> {
let result = isPrime(7);
expect(result).toBe(true);
})

test("is prime number",  ()=> {
let result = isPrime(9);
expect(result).toBe(false);
})

test("find duplicate",  ()=> {
let numberInArray = [2, 6, 5, 7, 51, 26, 5, 37];
let result = findFirstDuplicate(numberInArray);
expect(result).toBe(5);


})


test("find duplicate",  ()=> {
let numberInArray = [2, 6, 5, 7, 51, 26,  37,5];
let result = findFirstDuplicate(numberInArray);
expect(result).toBe(5);


})


test("find duplicate",  ()=> {
let numberInArray = [2,2, 6, 5, 7, 51, 26,  37,5,5];
let result = findFirstDuplicate(numberInArray);
expect(result).toBe(2);
})

test("find duplicate",  ()=> { 
let numberInArray = [1,2,3,4,5, 1,2];
let result = findFirstDuplicate(numberInArray);
expect(result).toBe(1);


})

test("reverse array",  ()=> { 
let numberInArray = [1,2,3,4,5, 6,7];
let result = reverseArray(numberInArray);
expect(result).toStrictEqual([7, 6, 5, 4, 3, 2, 1]);

})


test("factorial number", ()=> {
let result = factorial(5);
expect(result).toBe(120);

})


test("palindrome word", ()=> {
let result = factorial("aaaa");
expect(result).toBe(true);

})
















