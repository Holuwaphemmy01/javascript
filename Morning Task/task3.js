class Shape{
    #name = "";
  constructor(name){
      this.#name = name;
  }

  getName(){
    return this.#name
  }
}


class Rectangle extends Shape{
  #side1
  #side2
  constructor(name, side1, side2){
    super(name);
    this.#side1 = side1;
    this.#side2 = side2;
  }

  getArea(){
    let area = this.#side1 *this.#side2;
    return area;
  }

  isSquare(){
    this.#side1 == this.#side2 ? true : false;
  }
}

module.exports = Rectangle

let rectangle = new Rectangle("rect", 4,5)
console.log(rectangle.side1)

let number = new Rectangle("rectangle", 4, 4);
console.log(number.getArea()); 
