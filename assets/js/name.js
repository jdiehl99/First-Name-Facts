var countryOrigin = "";
var countryShow = "";
var searchTerm = "";
jQuery(($) => { // document on ready

    $(document).on("click", "#doSearch", function () {
        console.log("search button was clicked");
        event.preventDefault();

        // empty out the div where the results are displayed
        $("#dataShow").empty();

        // grab the name from the input box
        var searchTerm = $("#searchInput").val().trim();

        // send the request to BehindTheName using ajax
        $.ajax({
            type: "GET",
            url: "https://www.behindthename.com/api/lookup.php?name=" + searchTerm + "&key=jo493898",
            dataType: "xml",
            success: function (xml) {

                // grab the results from the XML data returned from BehindTheName
                var originInfo = $(xml).find('usage').text();
                console.log("origin info", originInfo);
                // if no origin was returned, mark as unknown
                if (originInfo == "") {
                    countryShow = "Unknown";
                } else {
                    // find the first origin returned in the last
                    $(xml).find('usage_full').each(function (i) {
                        if (i > 0) {
                            return false;
                        }
                        // assign the returned origin to variable countryOrigin
                        var countryOrigin = $(this).text();
                        console.log("origin", countryOrigin);

                        // change variable to country name instead of origin, ie: from Spanish to Spain
                        if (countryOrigin == "Catalan") {
                            countryShow = "Catalonia";
                        } else if (countryOrigin == "Chinese") {
                            countryShow = "China";
                        } else if (countryOrigin == "Czech") {
                            countryShow = "Czech Republic";
                        } else if (countryOrigin == "Danish") {
                            countryShow = "Denmark";
                        } else if (countryOrigin == "Dutch") {
                            countryShow = "Netherlands";
                        } else if (countryOrigin == "English") {
                            countryShow = "England";
                        } else if (countryOrigin == "Finnish") {
                            countryShow = "Finland";
                        } else if (countryOrigin == "French") {
                            countryShow = "France";
                        } else if (countryOrigin == "German") {
                            countryShow = "Germany";
                        } else if (countryOrigin == "Irish") {
                            countryShow = "Ireland";
                        } else if (countryOrigin == "Italian") {
                            countryShow = "Italy";
                        } else if (countryOrigin == "Japanese") {
                            countryShow = "Japan";
                        } else if (countryOrigin == "Norwegian") {
                            countryShow = "Norway";
                        } else if (countryOrigin == "Polish") {
                            countryShow = "Poland";
                        } else if (countryOrigin == "Portuguese") {
                            countryShow = "Portugal";
                        } else if (countryOrigin == "Russian") {
                            countryShow = "Russia";
                        } else if (countryOrigin == "Slovak") {
                            countryShow = "Slovakia";
                        } else if (countryOrigin == "Spanish") {
                            countryShow = "Spain";
                        } else if (countryOrigin == "Swedish") {
                            countryShow = "Sweden";
                        } else if (countryOrigin == "Ukrainian") {
                            countryShow = "Ukraine";
                        } else { // if not in this list, mark as unknown
                            countryShow = "Unknown";
                        }
                    });
                }
                // show the country name in the dataShow div on index.html
                $("#dataShow").append('<h1>' + countryShow + '</h1>');
            }
        });
    });
});