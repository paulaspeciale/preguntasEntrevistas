giconst numbers=[1,2,3];
numbers[10]=11;
//console.log(numbers.length)

function printPattern(rows){
  for (let i=rows; i>=1; i--){
    let row="";
    for (let j=1; j<=i;j++){
      row+="* ";
    }
    
    console.log(row)
  }
} 
printPattern(5)

let count=0;
const numbers=[0,1,2,3];
numbers.forEach(num =>{
  if(num) {count+=1;
  }

})

console.log(count)