function solve() {
    let btn = document.getElementsByTagName('button')[0];
    let cardSuit = document.querySelectorAll('#exercise select option');
    let cardsArr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    btn.addEventListener('click', cardGenerator)
    let symbol;
    function cardGenerator() {
        let cards = document.getElementById('cards');
        let startingCard = document.getElementById('from').value;
        let endingCard = document.getElementById('to').value;
        for (let suit of cardSuit) {
            if (suit.selected) {
                symbol = suit.textContent.split(' ')[1]
            }
        }
        let startingIndex = cardsArr.indexOf(startingCard);
        let endingIndex = cardsArr.indexOf(endingCard);

        for (let i = startingIndex; i <= endingIndex; i++) {
            let cardDiv = document.createElement('div');
            let paragraphOne = document.createElement('p');
            let paragraphTwo = document.createElement('p');
            let paragraphThree = document.createElement('p');
            cardDiv.setAttribute('class', 'card');
            paragraphOne.textContent = symbol;
            paragraphTwo.textContent = cardsArr[i]
            paragraphThree.textContent = symbol;
            cardDiv.appendChild(paragraphOne);
            cardDiv.appendChild(paragraphTwo);
            cardDiv.appendChild(paragraphThree);
            cards.appendChild(cardDiv);
        }

    }


}