const deck = document.querySelector('.deck');

/* Fetch JSON */
function getData() {
    fetch('data.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayCards(data);
        });
}

getData();

/* Display Cards */
function displayCards(data) {
    for (let i = 0; i < data.length; i++) {

        const card = document.createElement('div');
        card.classList.add('card');

        const name = document.createElement('h2');
        name.textContent = data[i].name;

        const country = document.createElement('p');
        country.textContent = data[i].country;

        const img = document.createElement('img');
        img.src = data[i].image;

        const desc = document.createElement('p');
        desc.textContent = data[i].description;
        desc.classList.add('hidden');

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(country);
        card.appendChild(desc);

        deck.appendChild(card);

        /* Interactivity (click to show/hide description) */
        card.addEventListener('click', function() {
            desc.classList.toggle('hidden');
            card.classList.toggle('active');
        });
    }
}