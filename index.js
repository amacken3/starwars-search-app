let allFilms = [];
let allCharacters = [];

// Fetch all films from SWAPI
fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    allFilms = data.results;
    displayFilms(allFilms);
  })
  .catch(error => {
    console.error(error);
  });

// Fetch all characters from SWAPI
fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    allCharacters = data.results;
    displayCharacters(allCharacters);
  })
  .catch(error => {
    console.error(error);
  });

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');

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
}

function displayFilms(films) {
  const filmListElement = document.getElementById('film-list');
  filmListElement.innerHTML = '';

  films.forEach(film => {
    const filmItem = document.createElement('li');
    filmItem.textContent = film.title;
    filmListElement.appendChild(filmItem);
  });
}

function displayCharacters(characters) {
  const characterListElement = document.getElementById('character-list');
  characterListElement.innerHTML = '';

  characters.forEach(character => {
    const characterItem = document.createElement('li');
    characterItem.textContent = character.name;
    characterListElement.appendChild(characterItem);
  });
}
