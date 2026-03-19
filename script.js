const deck = document.querySelector('.deck');

/*
    Step 1: Fetch data from your JSON file by:
    - Inside of the getCards() function, use fetch() to load data.json
    - Convert the response to JavaScript using .json()
    - Call displayCards() with the data
*/

async function getCards() {
    // Your code here for Step 1
    const data = await fetch('data.json');
    console.log(data);
    const cardDeck = await data.json();
    console.log(cardDeck);
    displayCards(cardDeck);
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

const deckElement = document.querySelector('.deck');



function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        const name = cards[i].name;
        console.log(name);
        const description = cards[i].description;
        console.log(description);
        const image = cards[i].image;

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');


        // create a p element for the card name card description 
        const cardNameElement = document.createElement('p');
        cardNameElement.textContent = name;

        const cardDescriptionElement = document.createElement('p');
        cardDescriptionElement.textContent = description;
        cardElement.appendChild(cardNameElement);
        cardElement.appendChild(cardDescriptionElement);


        const cardImageElement = document.createElement('img');
        cardImageElement.src = image;
        cardElement.appendChild(cardImageElement);

        // add append the element to card element

        deckElement.appendChild(cardElement)

    }
}



// DO NOT TOUCH (Starts loading the data)
getCards();