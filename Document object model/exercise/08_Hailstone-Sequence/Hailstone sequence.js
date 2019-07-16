function getNext() {
    let number = Number(document.getElementById('num').value);
    let result = document.getElementById('result')
    console.log(number)
    let hailstoneSequence = [];
    hailstoneSequence.push(number);

    while (number !== 1) {
        if (number % 2 === 0) {
            number = number / 2;
            hailstoneSequence.push(number);
        } else {
            number = (3 * number) + 1;
            hailstoneSequence.push(number);

        }
    }
    for (let i = 0; i < hailstoneSequence.length; i++) {
        result.textContent += hailstoneSequence[i] + ' '
    }
}
