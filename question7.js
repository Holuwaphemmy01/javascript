function factorial(number){
let sumFactorial = 1;
	for (let index = 1; index <= number; index++){

			sumFactorial = sumFactorial * index;

			}
return sumFactorial ;


	}

module.exports = {factorial};
