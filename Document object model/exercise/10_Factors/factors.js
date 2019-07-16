function solve() {
   let number = Number(document.getElementById('num').value);
   let factorArray = [];
   let result = document.getElementById('result');
   for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= number; j++) {
         if (i * j === number) {
            if (!(factorArray.includes(i)))
               factorArray.push(i)
         }
      }
   }
   for (let i = 0; i < factorArray.length; i++) {
      if(i === factorArray.length - 1){
         result.textContent += factorArray[i]
      }
      else {
         result.textContent += factorArray[i] + ' '
      }
   }
}