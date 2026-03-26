// get the place where the cards will go
const deck = document.getElementById("deck");

// get the data from data.json
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            // make one card
            const card = document.createElement("div");
            card.classList.add("card");

            // put content inside the card
            card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h2>${item.name}</h2>
        <p><strong>Type:</strong> ${item.type}</p>
        <p>${item.fact}</p>
      `;

            // add card to the page
            deck.appendChild(card);
        });
    });