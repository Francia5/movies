var search = $('.search');
var searchProducts = $('#searchProducts');
var searchText;

search.click(function (e) {
    e.preventDefault();
    searchText = searchProducts.val();
    $('#searchProducts').val("");


    allMovies();
});





function allMovies() {

    $.ajax({
        url: `http://www.omdbapi.com/?apikey=81c5ceee&t=${searchText}`,
        type: 'GET',
        datatype: 'json',
        crossDomain: true
    }).done(

        function (data) {
            console.log(data);
            var year = data.Year;
            console.log(year);
            var rated = data.Rated;
            console.log(rated);
            var released = data.Released;
            console.log(released);
            var runtime = data.Runtime;
            console.log(runtime);
            var actors = data.Actors;
            console.log(actors);
            var country = data.Country;
            console.log(country);
            var director = data.Director;
            console.log(director);
            var genre = data.Genre;
            console.log(genre);
            var language = data.Language;
            console.log(language);
            var plot = data.Plot;
            console.log(plot);
            var poster = data.Poster;
            console.log(poster);


            var template = document.getElementById('index').innerHTML;
            console.log(template);
            var compile = Handlebars.compile(template);
            var compiledHTML = compile({
                name: `${data.Title}`,
                poster: `${data.Poster}`,
                rated: `Clasificacion: <strong>${data.Rated}</strong>`,
                year: `Fecha de lanzamiento : <strong>${data.Released}</strong>`,
                runtime: `Duracion: <strong>${data.Runtime}</strong>`,
                genre: `Genero: <strong>${data.Genre}</strong>`,
                director: `Director: <strong>${data.Director}</strong>`,
                plot: `<strong>Sinopsis:</strong> ${data.Plot}`,
            });
            document.getElementById('action').innerHTML += compiledHTML;

        }

    ).fail(error);




};

function error() {
    alert("No se pueden cargar los datos");

}

$(document).ready(function () {

    if (searchText.length === 0) {
        $("#movies").empty();
    }

    allMovies();


});