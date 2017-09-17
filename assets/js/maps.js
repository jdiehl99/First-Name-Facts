function initMap() {
    map = new google.maps.Map(document.getElementById('theMap'), {
        center: { lat: latInfo, lng: longInfo },
        zoom: 4
    });
    var marker = new google.maps.Marker({
        position: { lat: latInfo, lng: longInfo },
        map: map
    });
}

$(document).ready(function () {
    $(document).on("click", ".maps", function () {
        console.log("maps button was clicked");
        event.preventDefault();

        var countryShow = $(this).attr("data-country");

        // google maps API key AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k
        var latInfo;
        var longInfo;
        var map;

        var mapQuery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + countryShow + "&key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k";
        console.log("country", countryShow);
        console.log("query", mapQuery);
        $.ajax({
            url: mapQuery,
            method: 'GET'
        }).done(function (response) {
            console.log(response);
            // grab latitude and longitude from results and put into variables
            latInfo = response.results["0"].geometry.location.lat;
            longInfo = response.results["0"].geometry.location.lng;
            console.log("lat", latInfo);
            console.log("long", longInfo);
            $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k&callback=initMap");
        });
    });
});