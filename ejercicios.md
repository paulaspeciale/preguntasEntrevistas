```javascript
### 📇 [Volver al indice](./indice.md)
# Ejemplos de ejercicios ❗
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