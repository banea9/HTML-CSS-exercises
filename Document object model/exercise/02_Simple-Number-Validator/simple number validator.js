function validate() {
    let btn = document.querySelector('fieldset div button');
    let inputNumber = document.querySelector('fieldset div input');
    let result = document.getElementById('response');
    btn.addEventListener('click', () => {
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6]
        let lastDigit = +inputNumber.value % 10;
        if(inputNumber.value.length === 10){
            let sumOfDigits = 0;
            
            for(let i = 0; i < 9; i++) {
                sumOfDigits += +inputNumber.value[i] * weights[i]
            }
            
            let reminder = sumOfDigits % 11;

            if(reminder === 10) {
                reminder = 0;
            }
            console.log(sumOfDigits);
            console.log(reminder)
            if(lastDigit === reminder) {
                result.textContent = 'This number is Valid!'
            }
            else {
                result.textContent = 'This number is NOT Valid!'
            }
        }
    })
    
}