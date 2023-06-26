fetch('https://swapi.dev/api/films/1/')
  .then(response => response.json())
  .then(data => {
    // Handle the retrieved data here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });

