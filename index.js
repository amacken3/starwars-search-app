let allFilms = [];

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const filmListElement = document.getElementById('film-list');
const resultsContainer = document.getElementById('results');

fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    allFilms = data.results;
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
  displayResults();
}

function displayFilms(films) {
  filmListElement.innerHTML = '';

  films.forEach(film => {
    const filmItem = document.createElement('li');
    filmItem.textContent = film.title;

    const filmDetails = document.createElement('p');
    filmDetails.textContent = `Episode: ${film.episode_id} | Director: ${film.director} | Release Date: ${film.release_date}`;

    filmItem.appendChild(filmDetails);
    filmListElement.appendChild(filmItem);

    filmItem.addEventListener('click', function() {
      console.log('Film clicked:', film.title);
    });
  });
}

function displayResults() {
  if (filmListElement.children.length > 0) {
    resultsContainer.style.display = 'block';
  } else {
    resultsContainer.style.display = 'none';
  }
}

filmListElement.style.display = 'none';
resultsContainer.style.display = 'none';
