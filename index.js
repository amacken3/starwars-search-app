let allFilms = [];
let allCharacters = [];

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const filmListElement = document.getElementById('film-list');
const characterListElement = document.getElementById('character-list');
const resultsContainer = document.getElementById('results');

fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    allFilms = data.results;
  })
  .catch(error => {
    console.error(error);
  });

fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    allCharacters = data.results;
  })
  .catch(error => {
    console.error(error);
  });

searchInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

searchButton.addEventListener('click', performSearch);

function performSearch() {
  const searchQuery = searchInput.value.toLowerCase();

  const filteredFilms = allFilms.filter(film => {
    return film.title.toLowerCase().includes(searchQuery);
  });

  displayFilms(filteredFilms);

  const filteredCharacters = allCharacters.filter(character => {
    return character.name.toLowerCase().includes(searchQuery);
  });

  displayCharacters(filteredCharacters);

  displayResults();
}

function displayFilms(films) {
  filmListElement.innerHTML = '';

  films.forEach(film => {
    const filmItem = document.createElement('li');
    filmItem.textContent = film.title;
    filmListElement.appendChild(filmItem);
  });
}

function displayCharacters(characters) {
  characterListElement.innerHTML = '';

  characters.forEach(character => {
    const characterItem = document.createElement('li');
    characterItem.textContent = character.name;
    characterListElement.appendChild(characterItem);
  });
}

function displayResults() {
  if (filmListElement.children.length > 0 || characterListElement.children.length > 0) {
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.style.display = 'none';
  }
}

