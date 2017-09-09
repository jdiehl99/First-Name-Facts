$(document).on("click", ".actors", function () {
    event.preventDefault();

    // get country from button attribute
    var countryShow = $(this).attr("data-country");
    // get first name from button attribute
    // var searchTerm = $(this).attr("data-name");
    searchTerm = 'julia';
    // hide the buttonsDiv
    $("#buttonsDiv").hide();
    // create the queryURL to request the data
    var queryURL = 'https://api.themoviedb.org/3/search/person?api_key=0b67c20dc0c60917a8d87eb35c0cd032&language=en-US&query=' + searchTerm + '&page=1&include_adult=false';


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (results) {
        console.log(results);

        // var data = results.data;
        // for (var i = 0; i < data.length; i++) {

        // }
    });

});