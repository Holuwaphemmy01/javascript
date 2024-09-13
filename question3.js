function countOddNumbers(number){
let count = 0;
for(let index = 0; index < number.length; index++){
		if(number[index]  % 2  != 0){
			count =count + 1;
				}
	}
return count;

}

module.exports={countOddNumbers};