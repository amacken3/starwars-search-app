//fetch('https://swapi.dev/api/films/1/')
 // .then(response => response.json())
 // .then(data => {
    // Handle the retrieved data here
 //   console.log(data);
//  })
//  .catch(error => {
    // Handle any errors that occur during the request
  //  console.error(error);
  //});
  fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved films data here
    const films = data.results;
    films.forEach(film => {
      // Access film details like title, director, etc.
      console.log(film.title);
      console.log(film.director);
      // ...
    });
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

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
// Handle the retrieved films data here
const films = data.results;
const filmListElement = document.getElementById('film-list');

films.forEach(film => {
  const filmItem = document.createElement('li');
  filmItem.textContent = film.title;
  filmListElement.appendChild(filmItem);
});
