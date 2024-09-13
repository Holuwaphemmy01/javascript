function findFirstDuplicate(number){
let result = -1;
	for (let index = 0; index < number.length; index++){
		for(let count = number.length - 1; count >=0; count--){
		if(count == index){
				continue;
				}
		 if  (number[index] == number[count]){
					result = number[index]
						return result;
									}			}					
	
				}	
return  result
	}

module.exports = {findFirstDuplicate};




 