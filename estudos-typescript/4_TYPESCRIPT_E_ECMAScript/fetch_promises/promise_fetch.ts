fetch(`http://swapi.dev/api/people/1/`)
    .then(res => res.json())
    .then(personagem => console.log(personagem))