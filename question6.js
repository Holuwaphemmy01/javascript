function reverseArray(arrayOfNumber){
let newArray = [];
			for(let element =  arrayOfNumber.length - 1; element >= 0;  element-- ){
					newArray.push(arrayOfNumber[element]);

				}
return newArray;

		}


console.log(reverseArray([1,2,3,4,5,6,7]));

module.exports = {reverseArray};