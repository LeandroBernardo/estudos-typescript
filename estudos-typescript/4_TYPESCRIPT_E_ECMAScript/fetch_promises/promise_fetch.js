fetch("http://swapi.dev/api/people/1/")
    .then(function (res) { return res.json(); })
    .then(function (personagem) { return console.log(personagem); });
