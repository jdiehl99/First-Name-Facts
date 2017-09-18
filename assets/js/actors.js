$(document).ready(function () {
    $(document).on("click", ".actors", function () {
        event.preventDefault();

        // get first name from button attribute
        var searchTerm = $(this).attr("data-name");

        // hide the buttonsDiv
        $("#buttonsDiv").hide();
        // create the queryURL to request the data
        var queryURL = 'https://api.themoviedb.org/3/search/person?api_key=0b67c20dc0c60917a8d87eb35c0cd032&language=en-US&query=' + searchTerm + '&page=1&include_adult=false';

        // send the request through ajax
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {
            // go through results and display list of names
            var data = response.results;
            udiv = $('<div class="actorList">');
            for (var i = 0; i < data.length; i++) {
                if (data[i].profile_path == null) {
                    // if there is no photo, show the placeholder image
                    var imgShow = "assets/images/noimage.png";
                } else {
                    // show image from TMDB
                    var imgShow = 'https://image.tmdb.org/t/p/w92/' + data[i].profile_path;
                }
                udiv.append('<div><h3>' + data[i].name + '</h3><img src="' + imgShow + '"></div>');
            }
            $("#dataShow").append(udiv);    // add the list to the dataShow div
        });

    });
});
// need to display in columns once CSS framework has been decided
// URL for photo of actor https://image.tmdb.org/t/p/w92/{profile_path}
// larger photo available at w185 and smaller at w45
// link to search results if we want to include that https://www.themoviedb.org/search?query=julia+roberts