const person = {firstName: "firstName",
			   secondName: "secondName", 
			   age: 0
			}


function personFunction(values){
	return "First Name: "+values.firstName+", Last Name: "+values.secondName+", Age:" +values.age;

	}


person.firstName = "Oluwafemi";
person.secondName = "Jacob";
person.age = 18;

console.log(personFunction(person));