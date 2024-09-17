function FunctionObject(word){


for(let element in word){
	console.log(element, word[element]);
	}
	
	}


let car = { make: "Toyota",
		    model: "Camry",
		    year: "2021"
	}

FunctionObject(car);