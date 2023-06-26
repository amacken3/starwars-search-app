let allFilms = [];
  fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved films data here
    const films = data.results;
    films.forEach(film => {
      // Access film details like title, director, etc.
      console.log(film.title);
      console.log(film.director);
    });
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
let allCharacters = [];
// Fetch all characters
fetch('https://swapi.dev/api/people/')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved characters data here
    const characters = data.results;
    characters.forEach(character => {
      // Access character details like name, height, etc.
      console.log(character.name);
      console.log(character.height);
      // ...
    });
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
    // Add event listner to search button
searchButton.addEventListener('click', performSearch);
    // Search function
function performSearch() {
    const searchQueary = searchInput.value.toLowerCase();
}
    // filter serach
const filteredFilms = allFilms.filter(film => {
    return film.title.toLowerCase().includes(searchQuery);
});

displayFilms(filteredFilms);

const filteredCharacters = allCharacters.filter(character => {
    return character.name.toLowerCase().includes(searchQuery);
  });

  displayCharacters(filteredCharacters);
  
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
  
// Handle the retrieved films data here
const films = data.results;
const filmListElement = document.getElementById('film-list');

films.forEach(film => {
  const filmItem = document.createElement('li');
  filmItem.textContent = film.title;
  filmListElement.appendChild(filmItem);
});
