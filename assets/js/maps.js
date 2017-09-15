$(document).ready(function () {
    $(document).on("click", ".maps", function () {
        console.log("maps button was clicked");
        event.preventDefault();

        var countryShow = $(this).attr("data-country");
        var flagInfo = $(this).attr("data-flag");

        // google maps API key AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k


        var mapQuery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + countryShow + "&key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k";
        console.log(mapQuery);
        $.ajax({
            url: mapQuery,
            method: 'GET'
        }).done(function (results) {
            console.log(results);
            // grab latitude and longitude from results and put into variables

        });

        $("#dataShow").append('<p>Maps page - ' + countryShow + ' was passed through from button on Name Page</p>');

        // pass through Longitude and Latitude to create map
        function myMap() {
            var mapProp = {
                center: new google.maps.LatLng(51.508742, -0.120850),
                zoom: 5,
            };
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        }
        // why won't this recognize myMap function?  It works fine outside of the on.ready
        $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k&callback=myMap");

    });
});