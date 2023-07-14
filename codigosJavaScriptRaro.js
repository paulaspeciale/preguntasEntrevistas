const numbers=[1,2,3];
numbers[10]=11;
console.log(numbers.length)

function printPattern(rows){
  for (let i=rows; i>=1; i--){
    let row="";
    for (let j=1; j<=(rows-1)*2;j++){
      row+=" ";
    }
    for(let k=1; k<=i; k++){
      row+="* "
    }
    console.log(row)
  }
}
printPattern(5)