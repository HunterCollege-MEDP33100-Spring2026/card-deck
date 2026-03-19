const deck = document.querySelector('.deck');

/*
    Step 1: Fetch data from JSON
*/
function getCards() {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            displayCards(data);
        })
        .catch(error => console.log("Error:", error));
}


/*
    Step 2 + 3: Display cards + add interactivity
*/
function displayCards(cards) {
    for (let i = 0; i < cards.length; i++) {

        // create card container
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        // create elements
        const name = document.createElement("h3");
        name.textContent = cards[i].name;

        const img = document.createElement("img");
        img.src = cards[i].image;

        const desc = document.createElement("p");
        desc.textContent = cards[i].description;

        // hide description at first
        desc.style.display = "none";

        // add elements to card
        cardDiv.appendChild(name);
        cardDiv.appendChild(img);
        cardDiv.appendChild(desc);

        /*
            Step 3: Interactivity
            Click to show/hide description
        */
        cardDiv.addEventListener("click", function () {
            if (desc.style.display === "none") {
                desc.style.display = "block";
            } else {
                desc.style.display = "none";
            }
        });

        // add card to deck
        deck.appendChild(cardDiv);
    }
}

// call the function
getCards();