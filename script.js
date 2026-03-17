const deck = document.querySelector('.deck');

/*
    Step 1: Fetch data from your JSON file by:
    - Inside of the getCards() function, use fetch() to load data.json
    - Convert the response to JavaScript using .json()
    - Call displayCards() with the data
*/

// async function getCards() {
//     // Your code here for Step 1
//     const cards = await fetch('data.json');
//     console.log(data);
//     const displayCards = await data.json();
//     console.log(displayCards);
// }

async function getCards() {
    const response = await fetch('data.json');
    const data = await response.json();

    console.log(data);

    displayCards(data);
}

getCards();


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

    deck.innerHTML = "";
    for (let i = 0; i < cards.length; i++) {

        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = cards[i].name;

        const description = document.createElement('p');
        description.textContent = cards[i].description;

        const img = document.createElement('img');
        img.src = cards[i].image;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);

        deck.appendChild(card);

        // Interactivity
        card.addEventListener('click', function () {
            card.classList.toggle('active');
        });
    }
}


// DO NOT TOUCH (Starts loading the data)
getCards();
