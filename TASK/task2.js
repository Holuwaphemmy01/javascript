function increase(scores){
return scores.map((studentScore) => studentScore + 5);

}

console.log(increase([85, 92, 78, 88, 95]));
module.exports={increase};