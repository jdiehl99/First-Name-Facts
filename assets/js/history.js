$(document).ready(function () {
    $(document).on("click", ".history", function () {

        event.preventDefault();
        // empty out any data still showing from other buttons
        $("#buttonOutput").empty();
        $("#ngramData").empty();
        $("#theMap").empty();

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

                // console.log(data.query.pages["0"].extract);
                countryHistory = data.query.pages["0"];
                // console.log(countryHistory.extract);
                $("#buttonOutput").html(countryHistory.extract);
                $('#buttonOutput').collapser({
                    mode: 'chars',
                    truncate: 400
                });
            })


        } else {
            countryHistory = "Unknown Origin"
            $("#buttonOutput").append(countryHistory);

        }


    });
});