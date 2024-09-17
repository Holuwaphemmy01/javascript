const counter = { count : 0,
				   step: 1,
				  increment: function(){
						return  this.count += this.step;
						},
				decrement: function(){
						return this.count -= this.step;
						}
}

let x = counter.increment();
console.log(x);



