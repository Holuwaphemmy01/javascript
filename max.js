function findMax(number){
let max = 0;
for (let index = 0; index < number.length; index++){
		if(number[index] > max){
			max = number[index];
				}
		}
	return max;
}

module.exports = {findMax};