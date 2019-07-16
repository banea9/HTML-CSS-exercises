function leapYear() {
    let yearInput = document.getElementById('exercise').children[0];
    let checkBtn = document.getElementById('exercise').children[2];
    checkBtn.addEventListener('click', () => {
        let year = Number(yearInput.value);
        if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
            document.getElementById('year').children[0].textContent = 'Leap Year'
            document.getElementById('year').children[1].textContent = year;
        } else {
            document.getElementById('year').children[0].textContent = 'Not Leap Year'
            document.getElementById('year').children[1].textContent = year;
        }
        yearInput.value = '';
    })
}