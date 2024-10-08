
function number(array){
   array = array.join();

   for(let index in array){
    array = array.replace(",", "");
   }

   array = parseInt(array);
  let newArray =  array + 1;

   newArray = newArray.toString();
  let result = [];

  for(let index = 0; index < newArray.length; index++){
      result.push(newArray[index]);
  }
  return result;
}


 
let num = [1, 3, 4];
console.log(number(num));

let newNum = [9, 9, 9,];
console.log(number(newNum));