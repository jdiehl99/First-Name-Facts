var countryOrigin = "";
var countryShow = "";
var searchTerm = "";
var countryPageID = "";
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
                        if (countryOrigin == "American") {
                            countryShow = "USA";
                            countryPageID = "3434750";
                        } else if (countryOrigin == "Catalan") {
                            countryShow = "Catalonia";
                            countryPageID = "6822";
                        } else if (countryOrigin == "Chinese") {
                            countryShow = "China";
                            countryPageID = "5405";
                        } else if (countryOrigin == "Czech") {
                            countryShow = "Czech Republic";
                            countryPageID = "5321";
                        } else if (countryOrigin == "Danish") {
                            countryShow = "Denmark";
                            countryPageID = "76972";
                        } else if (countryOrigin == "Dutch") {
                            countryShow = "Netherlands";
                            countryPageID = "21148";
                        } else if (countryOrigin == "English") {
                            countryShow = "United Kingdom";
                            countryPageID = "31717";
                        } else if (countryOrigin == "Finnish") {
                            countryShow = "Finland";
                            countryPageID = "10577";
                        } else if (countryOrigin == "French") {
                            countryShow = "France";
                            countryPageID = "5843419";
                        } else if (countryOrigin == "German") {
                            countryShow = "Germany";
                            countryPageID = "11867";
                        } else if (countryOrigin == "Irish") {
                            countryShow = "Ireland";
                            countryPageID = "147575";
                        } else if (countryOrigin == "Italian") {
                            countryShow = "Italy";
                            countryPageID = "14532";
                        } else if (countryOrigin == "Japanese") {
                            countryShow = "Japan";
                            countryPageID = "15573";
                        } else if (countryOrigin == "Norwegian") {
                            countryShow = "Norway";
                            countryPageID = "21241";
                        } else if (countryOrigin == "Polish") {
                            countryShow = "Poland";
                            countryPageID = "22936";
                        } else if (countryOrigin == "Portuguese") {
                            countryShow = "Portugal";
                            countryPageID = "23033";
                        } else if (countryOrigin == "Russian") {
                            countryShow = "Russia";
                            countryPageID = "25391";
                        } else if (countryOrigin == "Slovak") {
                            countryShow = "Slovakia";
                            countryPageID = "26830";
                        } else if (countryOrigin == "Spanish") {
                            countryShow = "Spain";
                            countryPageID = "26667";
                        } else if (countryOrigin == "Swedish") {
                            countryShow = "Sweden";
                            countryPageID = "5058739";
                        } else if (countryOrigin == "Ukrainian") {
                            countryShow = "Ukraine";
                            countryPageID = "31750";
                        } else { // if not in this list, mark as unknown
                            countryShow = "Unknown";
                        }
                    });
                }
                // show the country name in the dataShow div on index.html

                $("#dataShow").append('<h1>' + countryShow + '</h1>');
                $("#dataShow").append('<button class="btn maps" data-country="'+countryShow+'">MAP</button>');
                $("#dataShow").append('<button class="btn history" data-pageID="'+countryPageID+'" data-country="'+countryShow+'">HISTORY</button>');
                $("#dataShow").append('<button class="btn actors" data-name="'+searchTerm+'" data-country="'+countryShow+'">ACTORS</button>');

            }
        });
    });
});