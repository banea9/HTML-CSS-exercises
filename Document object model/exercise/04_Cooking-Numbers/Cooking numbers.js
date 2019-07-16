function solve() {
    let number = document.querySelector('#output');
    let chopBtn = document.getElementsByTagName('button')[0];
    chopBtn.addEventListener('click', chop)
    let diceBtn = document.getElementsByTagName('button')[1];
    diceBtn.addEventListener('click', dice)
    let spiceBtn = document.getElementsByTagName('button')[2];
    spiceBtn.addEventListener('click', spice)
    let bakeBtn = document.getElementsByTagName('button')[3];
    bakeBtn.addEventListener('click', bake)
    let filletBtn = document.getElementsByTagName('button')[4];
    filletBtn.addEventListener('click', fillet)
    let solution = document.getElementById('output');
    function chop() {
        let number = Number(document.querySelector('#exercise input').value);
        if (solution.textContent) {
            solution.textContent /= 2;
        } else {
            solution.textContent = number / 2;
        }
    }

    function dice() {
        let number = Number(document.querySelector('#exercise input').value);
        if (solution.textContent) {
            solution.textContent = Math.sqrt(solution.textContent);
        } else {
            solution.textContent = Math.sqrt(number);
        }
    }

    function spice() {
        let number = Number(document.querySelector('#exercise input').value);
        if (solution.textContent) {
            solution.textContent = Number(solution.textContent) + 1;
        } else {
            solution.textContent = Number(number + 1);
        }
    }

    function bake() {
        let number = Number(document.querySelector('#exercise input').value);
        if (solution.textContent) {
            solution.textContent *= 3;
        } else {
            solution.textContent = number * 3;
        }
    }

    function fillet() {
        let number = Number(document.querySelector('#exercise input').value);
        if (solution.textContent) {
            solution.textContent = Number(solution.textContent) * 0.8;
        } else {
            solution.textContent = number * 0.8;
        }
    }
}
