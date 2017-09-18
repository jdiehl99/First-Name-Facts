$(document).ready(function () {
    $(document).on("click", ".history", function () {
        
        console.log("history button was clicked");
        event.preventDefault();

        var countryShow = $(this).attr("data-country");
        var countryID = $(this).attr("data-pageID");
        var flagInfo = $(this).attr("data-flag");
        var countryHistory;

        if (countryShow !== "Unknown") {

            var JSONSite = "https://en.wikipedia.org/w/api.php?action=query&formatversion=2&exintro=true&prop=extracts&format=json&pageids=";
            JSONSite += countryID;
            JSONSite += '&callback=?';

            $.ajax({
                url: JSONSite,
                dataType: 'jsonp',
                method: "GET"
            }).done(function (data) {

                 //console.log(data.query.pages["0"].extract);
                countryHistory = data.query.pages["0"];
                 console.log(countryHistory.extract);
                $("#HistoryOutput").append(countryHistory.extract);
            })


        } else {
            countryHistory = "Unknown Origin"
            $("#HistoryOutput").append(countryHistory);

        }

        var latInfo;
        var longInfo;
        var map;
    
        var mapQuery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + countryShow + "&key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k";
        //console.log("country", countryShow);
        //console.log("query", mapQuery);
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

        var weartherInfo = "https://api.openweathermap.org/data/2.5/weather?lat=" + latInfo + "&lon=" + longInfo + "&APPID=ff1096c5526342e8a4617403b91ccda6";
    });
});