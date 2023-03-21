document.addEventListener("DOMContentLoaded", e => {

    const film = [{
        ID: 1,
        nom: "Rocky",
        Réalisateur: "John G. Avildsen",
        date: "25/03/1977",
        Cover: "./asset/Rocky.jpg",
        URL: "https://fr.wikipedia.org/wiki/Rocky_(film,_1976)"

    }, {
        ID: 2,
        nom: "Terminator 2",
        Réalisateur: "James Cameron",
        date: "16/10/1991",
        Cover: "./asset/Terminator2.jpg",
        URL: "https://fr.wikipedia.org/wiki/Terminator_2_:_Le_Jugement_dernier"

    }, {
        ID: 3,
        nom: "Spiderman",
        Réalisateur: "Sam Raimi",
        date: "16/10/1991",
        Cover: "./asset/Spiderman.jpg",
        URL: "https://fr.wikipedia.org/wiki/Spider-Man_(film)"

    }];
    console.table(film);
    for (let index = 0; index < film.length; index++) {
        const element = film[index];
        console.table(element);
    }
});