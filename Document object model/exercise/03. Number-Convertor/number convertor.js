function solve() {
    let button = document.querySelector('#menus button');
    
    let selectElementTo = document.getElementById('selectMenuTo');
    let optionBinary = document.querySelector('#selectMenuTo option');
    let optionHexadecimal = document.createElement('option');
    
    optionBinary.textContent = 'Binary';
    optionHexadecimal.textContent = 'hexadecimal';
    selectElementTo.appendChild(optionHexadecimal);

    button.addEventListener('click', () => {
        let number = document.getElementById('input').value;
        number = Number(number);
        if(number < 0) {
            number = 0xFFFFFF + number + 1;
        }
        if(optionBinary.selected) {
            let parsed = Number(number).toString(2);
            document.getElementById('result').value = parsed;
        }
        else {
            let parsed = Number(number).toString(16);
            document.getElementById('result').value = parsed.toUpperCase();
        }
    })
}