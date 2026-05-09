fetch("data.json")
  .then(response => response.json())
  .then(data => displayCards(data))
  .catch(error => console.error("Error loading cards:", error));

function displayCards(cards) {
  const deck = document.querySelector(".deck");

  cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    cardDiv.innerHTML = `
      <h2>${card.name}</h2>
      <p class="number">#${card.number}</p>
      <img src="${card.image}" alt="${card.name}">
      <h3>${card.type}</h3>
      <p class="fact">${card.fact}</p>
    `;

    cardDiv.addEventListener("click", () => {
      cardDiv.classList.toggle("selected");
    });

    deck.appendChild(cardDiv);
  });
}