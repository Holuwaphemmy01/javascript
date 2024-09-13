function palindrome(word){
let counter = "" ;
	for (let index = word.length-1; index >= 0; index-- ){
		counter = counter + word[index];
				}
		
return counter == word ? true : false;

	}

module.exports = {palindrome};
