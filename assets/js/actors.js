$(document).ready(function () {
    $(document).on("click", ".actors", function () {

        event.preventDefault();
        // empty out any data still showing from other buttons
        $("#dataShow").hide();
        $("#popData").hide();
        $("#buttonOutput").empty();
        $("#ngramData").empty();
        $("#theMap").empty();

        // get first name from button attribute
        var searchTerm = $(this).attr("data-name");

        // create the queryURL to request the data
        var queryURL = 'https://api.themoviedb.org/3/search/person?api_key=0b67c20dc0c60917a8d87eb35c0cd032&language=en-US&query=' + searchTerm + '&page=1&include_adult=false';

        // add intro text for this page
        $("#buttonOutput").html('You share a name with these famous actors/actresses.  Click on any image to see more about this person.');
        // send the request through ajax
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {
            // go through results and display list of names
            console.log(response);
            var data = response.results;
            udiv = $('<div class="actorList">');
            var j=1;
            for (var i = 0; j < 16; i++) {
                if (data[i].profile_path != null) {
                    // show image from TMDB
                    var imgShow = 'https://image.tmdb.org/t/p/w92/' + data[i].profile_path;
                    var figTag=$('<figure>');
                    figTag.append('<a href="https://www.themoviedb.org/search?query='+data[i].name+'" target="_blank"><img src="' + imgShow + '" class="actorimg"></a>');
                    figTag.append('<figcaption>' + data[i].name + '</figcaption>');
                    udiv.append(figTag);
                    j++;
                }
            }
            $("#buttonOutput").append(udiv);    // add the list to the dataShow div
        });

    });
});