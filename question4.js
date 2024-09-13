function isPrime(number){
let count = 0;
	for (let index = 2; index < number; index++){
		if ( number % index == 0){
			count ++;
				}
			}
	return count == 0 ? true : false;

	}

module.exports={isPrime};
