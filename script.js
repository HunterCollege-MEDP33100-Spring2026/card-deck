// fetch() loads the data from the JSON file
fetch("data.json")
    // this takes the response and converts it into JavaScript data
    .then((response) => response.json())

    // once the JSON is converted, we send that data into displayCards()
    .then((data) => {
        displayCards(data);
    })

    // if something goes wrong, this shows an error in the console
    .catch((error) => {
        console.error("Error loading JSON:", error);
    });

// this function receives the JSON data and creates the cards on the page
function displayCards(data) {
    // select the container in HTML where all the cards will go
    const deck = document.querySelector(".deck");

    // loop through each card object inside the JSON array
    data.forEach((card) => {
        // create a new <div> element for one card
        const cardElement = document.createElement("div");

        // add the class "card" so CSS can style it
        cardElement.classList.add("card");

        // put the card content inside the div
        // ${card.something} means: insert the value from the JSON
        cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <h2>${card.name}</h2>
      <p class="card-number">Card ${card.number}</p>
      <p class="description">${card.description}</p>
    `;

        // add click interaction to each card
        // when the card is clicked, it adds or removes the class "active"
        cardElement.addEventListener("click", () => {
            cardElement.classList.toggle("active");
        });

        // place the finished card inside the .deck container
        deck.appendChild(cardElement);
    });
}