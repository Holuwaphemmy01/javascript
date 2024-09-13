function sumEvenNumbers(number){
let sum = 0;
	for(let index = 0; index < number.length; index++){
		if (number[index] % 2 == 0){
				sum = sum + number[index];
				}
			}
	return sum;
	}


console.log(sumEvenNumbers([2, 9, 3, 21, 8]));

module.exports = {sumEvenNumbers};