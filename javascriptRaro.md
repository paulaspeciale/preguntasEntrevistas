# Cosas "Raras" que pasan en JavaScript ❗
### 📇 [Volver al indice](./indice.md)
[Codigos](./codigosJavaScriptRaro.js)
```javascript
const numbers=[1,2,3];
numbers[10]= 9 ;
console.log(numbers.length) // -> 11 
```
```javascript
let count=0;
const numbers=[0,1,2,3];
numbers.forEach(num =>{
  if(num) {count+=1;
  }

})
console.log(count) //-> 3
// 0 -> false
```