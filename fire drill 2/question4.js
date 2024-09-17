const name ={firstName: "firstName",
			secondName: "secondname", 
			fullName: function(){
						return this.firstName +" "+ this.secondName
						}
			}


name.firstName = "OLuwafemi";
name.secondName = "Jacob";
console.log(name.fullName());