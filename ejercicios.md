
### 📇 [Volver al indice](./indice.md)
# Ejemplos de ejercicios ❗
```javascript
/*Dado un array de numeros enteros devuelve la suma mas grande entre dos numeros adyacentes*/
const array = [2,4,1,5,6,3];
maxAdjacenteSum(array) // 6 + 5 -> 11
function maxAdjacenteSum(array){
  let maxSum=-Infinity;
  for (let i=0; i<array.length-1; i++){
    const sum = array[i]+array[i+1];
    if(sum>maxSum){
      maxSum=sum;
    }
    // alternativa sin el if
    //maxSum=Math.max(maxSum,sum)
  }
  return maxSum;
}
```
```javascript
/* Imprimir un patron dado
  Ejemplo:
  *****
   ****
    ***
     **
      *
      
  */
 function printPattern(rows){
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
/* otra version*/
function printPattern(rows){
  for (let i=rows; i>=1; i--){
    let row="";
    for (let j=1; j<=i;j++){
      row+="* ";
    }    
    console.log(row)
  }
}
```