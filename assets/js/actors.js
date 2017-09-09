$(document).on("click", ".actors", function () {
    event.preventDefault();

    // get first name from button attribute
    var searchTerm = $(this).attr("data-name");

    console.log("searchTerm",searchTerm);
    // hide the buttonsDiv
    $("#buttonsDiv").hide();
    // create the queryURL to request the data
    var queryURL = 'https://api.themoviedb.org/3/search/person?api_key=0b67c20dc0c60917a8d87eb35c0cd032&language=en-US&query=' + searchTerm + '&page=1&include_adult=false';

// send the request through ajax
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        // go through results and display list of names
        var data = response.results;
        udiv = $('<div class="pure-g">'); 
        for (var i = 0; i < data.length; i++) {
            udiv.append('<div class="pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">'+data[i].name+'</div>');
        }
        $("#dataShow").append(udiv);    // add the list to the dataShow div
    });

});

// URL for photo of actor https://image.tmdb.org/t/p/w92/{profile_path}
// larger photo available at w185 and smaller at w45
// link to search results if we want to include that https://www.themoviedb.org/search?query=julia+roberts