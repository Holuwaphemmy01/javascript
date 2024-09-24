function Sarah(name){
 
  let books = ["math", "eng"];
  anObject ={}
  
  for (let person of name){

    for (let index = 0; index < 1; index++){
      anObject[person] = books[index];
      books.shift();
  }
}
  return anObject;
}


let nameFriends = ["femi", "huy"]

console.log(Sarah(nameFriends))


