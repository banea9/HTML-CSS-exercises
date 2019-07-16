function greatestCD() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let result = document.getElementById('result')
    while(b !== 0){
        let oldB = b;
        b = a % b;
        a = oldB;
    }

    result.textContent = a;

}