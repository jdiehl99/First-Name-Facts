$(document).ready(function () {
    $(document).on("click", ".history", function () {

        event.preventDefault();
        // empty out any data still showing from other buttons
        $("#dataShow").show();
        $("#popData").hide();
        $("#buttonOutput").empty();
        $("#ngramData").empty();
        $("#theMap").empty();
        //grabs the information from the buttons
        var countryShow = $(this).attr("data-country");
        var countryID = $(this).attr("data-pageID");
        var flagInfo = $(this).attr("data-flag");
        var countryHistory;
        var imgTag;
        //the if statement runs if the country of origin wasn't unknown
        if (countryShow !== "Unknown") {
            //grabs the wikipeida api with the matching origin country
            var JSONSite = "https://en.wikipedia.org/w/api.php?action=query&formatversion=2&exintro=true&prop=extracts&format=json&pageids=";
            JSONSite += countryID;
            JSONSite += '&callback=?';

            $.ajax({
                url: JSONSite,
                dataType: 'jsonp',
                method: "GET"
            }).done(function (data) {
                //returns the history of the country from Wikipedia
                countryHistory = data.query.pages["0"];
                //creates an image for the matching flag of the country
                 imgTag=$("<img class='flags'>")
                imgTag.attr("src","assets/images/flags-normal/"+flagInfo);
                $("#buttonOutput").append(imgTag); 

                $("#buttonOutput").append(countryHistory.extract);
                //adds the collapser to show the first few sentences of the results and when clicked it shows the rest of the data
                $('#buttonOutput').collapser({
                    mode: 'chars',
                    truncate: 600,

                });

              
            })


        } else {
            //if it's unknown it just displays unknown origin
            countryHistory = "Unknown Origin"           
            $("#buttonOutput").append(countryHistory);

        }


    });
});