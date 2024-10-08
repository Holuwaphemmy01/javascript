const{Rectangle} = require("./task3");

let number = new Rectangle("rectangle", 4, 4);

test("Test for calculation of area", ()=> {
	let result = number.getArea();
	expect(result).toBe(16);

})


test("Test for calculation of area", ()=> {
	let result = number.isSquare();
	expect(result).toBe(true);

})




 