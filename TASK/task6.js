function studentTrack(list){
  let result = 0;
  for (const [key, value] of Object.entries(list)) {
        result += value;
  }
  return result;
}


const number ={"groceries": 150, "dinning out": 100, "transportation": 50, "entertainment": 80};
console.log(studentTrack(number));

module.exports={studentTrack}




 