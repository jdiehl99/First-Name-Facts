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
                 //console.log(countryHistory.extract);
                $("#HistoryOutput").append(countryHistory.extract);
            })


        } else {
            countryHistory = "Unknown Origin"
            $("#HistoryOutput").append(countryHistory);

        }

    });
});