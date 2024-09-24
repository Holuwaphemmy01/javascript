const {testScores} = require("./task1");
const {increase} = require("./task2");
const {squareNumber} = require("./task3.js");
const {studentTrack} = require("./task6.js");
const {studentPlanning} = require("./task5.js");




test("Score of student highr than 70", ()=> {
	let numberInArray = [2, 34, 73, 5, 89, 70];
	let result = testScores(numberInArray);
	expect(result).toStrictEqual([73, 89, 70]);
})

test("add 5 to each score", ()=> {
	let numberInArray = [85, 92, 78, 88, 95];
	let result = increase(numberInArray);
	expect(result).toStrictEqual([ 90, 97, 83, 93, 100 ]);
})

test("Square number in an array", ()=> {
 let numberInArray = [2, 4, 6, 8, 10];
 let result = squareNumber(numberInArray);
 expect(result).toStrictEqual([4, 16, 36, 64, 100]);
})


test("Add all the amount in the object", ()=> {
	const number ={"groceries": 150, "dinning out": 100, "transportation": 50, "entertainment": 80};
	let result = studentTrack(number);
	expect(result).toBe(380);
 })
 

 test("return all class at afternoon", ()=> {
	let time = ["11:00 AM", "1:00PM", "3:00PM", "5:00PM"];
	let result = studentPlanning(time);
	expect(result).toStrictEqual([ '1:00PM', '3:00PM', '5:00PM' ]);
 })