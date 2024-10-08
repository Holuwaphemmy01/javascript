function twoLargestNumber(array){
  let sum = [];
  let digit = array[0];
  for(let index =0; index < array.length; index++){
      if(array[index] >= digit){
      digit = array[index];
    }
  }
  console.log(digit)
  sum.push(digit);
   let num = array.indexOf(digit);
   array.splice(num, 1);
   digit = array[0];

  for(let element =0; element < array.length; element++){
    if(array[element] >= digit){
      digit = array[element];
    }
  }
  sum.push(digit)
  return sum;
} 

let number = [2, 3, 5, 7, 1];
console.log(twoLargestNumber(number));
let sum = [1, 9, 3, 4, 8];
console.log(twoLargestNumber(sum));

