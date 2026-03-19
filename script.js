const deck = document.querySelector('.deck');

/*
    Step 1: Fetch data from your JSON file by:
    - Inside of the getCards() function, use fetch() to load data.json
    - Convert the response to JavaScript using .json()
    - Call displayCards() with the data
*/

function getCards() {
    // Your code here for Step 1
    fetch('data.json')
        .then(response => response.json())
        .then(data => displayCards(data))
        .catch(error => console.error('Error fetching cards:', error))
}


/*
    Step 2: Display the cards
    - Inside the for loop, loop through the array of card objects
    - For each card, create HTML elements (using div, p, img, etc.)
    - Append each card to the .deck container

    Step 3: Add interactivity
    - After creating the HTML elemetns, add at least one event listener to each card
    - Some ideas: click to flip, highlight, show more info, etc.
*/

function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        // Your code here for Step 2 + 3
        const card = cards[i];

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const title = document.createElement('h2');
        title.textContent = card.name;

        const type = document.createElement('p');
        type.textContent = card.type || card.number || '';

        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.name;

        const info = document.createElement('p');
        info.textContent = card.fact || card.meaning || '';
        info.classList.add('hidden');

        cardDiv.addEventListener('click', () => {
            info.classList.toggle('hidden');
            cardDiv.classList.toggle('active');
        });

        cardDiv.appendChild(title);
        cardDiv.appendChild(type);
        cardDiv.appendChild(img);
        cardDiv.appendChild(info);

        deck.appendChild(cardDiv);

    }
}



// DO NOT TOUCH (Starts loading the data)
getCards();
