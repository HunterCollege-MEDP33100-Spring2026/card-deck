const deck = document.querySelector('.deck');

function getCards() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            displayCards(data);
        })
        .catch(error => {
            console.log('Error loading cards:', error);
        });
}

function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let img = document.createElement('img');
        img.src = cards[i].image;
        img.alt = cards[i].name;

        let name = document.createElement('h2');
        name.textContent = cards[i].name;

        let series = document.createElement('p');
        series.textContent = "Series: " + cards[i].series;

        let trait = document.createElement('p');
        trait.textContent = "Trait: " + cards[i].trait;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(series);
        card.appendChild(trait);

        card.addEventListener('click', function () {
            card.classList.toggle('active');
        });

        deck.appendChild(card);
    }
}

getCards();