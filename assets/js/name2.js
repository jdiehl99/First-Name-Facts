var countryOrigin = "";
var countryShow = "";
var searchTerm2 = "";
var countryPageID = "";
var flagImg = "";

var latInfo;
var longInfo;
// hide buttons div until search is done
$("#buttonsDiv").hide();
// hide map div unless we are on maps page
$("#theMap").hide();
// hide error div until call upon 
$(".errorMg").hide()

jQuery(($) => { // document on ready

    $(document).on("click", "#doSearch2", function () {


        console.log("search button 2 was clicked");
        event.preventDefault();
        // grab the name from the input box
        var searchTerm2 = $(".searchInput2").val().trim();
        console.log("search term 2", searchTerm2);

        // show buttons div 
        $("#buttonsDiv").show();
        // empty out the div where the results are displayed        
        $("#buttonOutput").empty();
        $("#dataShow").hide();
        $("#popData").hide()
        $("#ngramData").hide();
        $("#theMap").empty();
        $("#buttonsDiv").empty();
        //hides the original search bar
        $("#mainSearch").hide();

        // hide title header
        $(".hero").hide();

        //validates the user input to make sure is either a non-empty string or
        // that there arent any numbers or spaces
        if (validate(searchTerm2)) {

            //show graph if search is good
            $("#ngramData").show();
            $("#dataShow").show();
            $("#popData").show();
            // send the request to BehindTheName using ajax
            $.ajax({
                type: "GET",
                url: "https://www.behindthename.com/api/lookup.php?name=" + searchTerm2 + "&key=jo493898",
                dataType: "xml",
                success: function (xml) {

                    // grab the results from the XML data returned from BehindTheName
                    var originInfo = $(xml).find('usage').text();
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

                            // change variable to country name instead of origin, ie: from Spanish to Spain
                            if (countryOrigin == "American") {
                                countryShow = "USA";
                                countryPageID = "3434750";
                                flagImg = "us.png";
                            } else if (countryOrigin == "Chinese") {
                                countryShow = "China";
                                countryPageID = "5405";
                                flagImg = "cn.png";
                            } else if (countryOrigin == "Czech") {
                                countryShow = "Czech Republic";
                                countryPageID = "5321";
                                flagImg = "cz.png";
                            } else if (countryOrigin == "Danish") {
                                countryShow = "Denmark";
                                countryPageID = "76972";
                                flagImg = "dk.png";
                            } else if (countryOrigin == "Dutch") {
                                countryShow = "Netherlands";
                                countryPageID = "21148";
                                flagImg = "nl.png";
                            } else if (countryOrigin == "English") {
                                countryShow = "United Kingdom";
                                countryPageID = "31717";
                                flagImg = "gb.png";
                            } else if (countryOrigin == "Finnish") {
                                countryShow = "Finland";
                                countryPageID = "10577";
                                flagImg = "fi.png";
                            } else if (countryOrigin == "French") {
                                countryShow = "France";
                                countryPageID = "5843419";
                                flagImg = "fr.png";
                            } else if (countryOrigin == "German") {
                                countryShow = "Germany";
                                countryPageID = "11867";
                                flagImg = "de.png";
                            } else if (countryOrigin == "Irish") {
                                countryShow = "Ireland";
                                countryPageID = "147575";
                                flagImg = "ie.png";
                            } else if (countryOrigin == "Italian") {
                                countryShow = "Italy";
                                countryPageID = "14532";
                                flagImg = "it.png";
                            } else if (countryOrigin == "Japanese") {
                                countryShow = "Japan";
                                countryPageID = "15573";
                                flagImg = "jp.png";
                            } else if (countryOrigin == "Norwegian") {
                                countryShow = "Norway";
                                countryPageID = "21241";
                                flagImg = "no.png";
                            } else if (countryOrigin == "Polish") {
                                countryShow = "Poland";
                                countryPageID = "22936";
                                flagImg = "pl.png";
                            } else if (countryOrigin == "Portuguese") {
                                countryShow = "Portugal";
                                countryPageID = "23033";
                                flagImg = "pt.png";
                            } else if (countryOrigin == "Russian") {
                                countryShow = "Russia";
                                countryPageID = "25391";
                                flagImg = "ru.png";
                            } else if (countryOrigin == "Slovak") {
                                countryShow = "Slovakia";
                                countryPageID = "26830";
                                flagImg = "sk.png";
                            } else if (countryOrigin == "Spanish") {
                                countryShow = "Spain";
                                countryPageID = "26667";
                                flagImg = "es.png";
                            } else if (countryOrigin == "Swedish") {
                                countryShow = "Sweden";
                                countryPageID = "5058739";
                                flagImg = "se.png";
                            } else if (countryOrigin == "Ukrainian") {
                                countryShow = "Ukraine";
                                countryPageID = "31750";
                                flagImg = "ua.png";
                            } else { // if not in this list, mark as unknown
                                countryShow = "Unknown";
                            }
                        });
                    }

                    // call to google api to get geo location (lat , long)
                    var mapQuery = "https://maps.googleapis.com/maps/api/geocode/json?address=" + countryShow + "&key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k";

                    $.ajax({
                        url: mapQuery,
                        method: 'GET'
                    }).done(function (response) {
                        // grab latitude and longitude from results and put into variables
                        latInfo = response.results["0"].geometry.location.lat;
                        longInfo = response.results["0"].geometry.location.lng;

                        // show the country name in the dataShow div on index.html
                        $("#dataShow").html('<h1 class="countryOrig">You searched for: '+searchTerm2+'</h1><h1 class="countryOrig">Your name originates from: ' + countryShow + '</h1>');
                        
                        // create links for navigation between APIs
                        $("#buttonsDiv").append('<a href="#" id="doSearch" class="btn name" searchInput="' + searchTerm2 + '" data-lat="' + latInfo + '"data-long="' + longInfo + '" data-flag="' + flagImg + '" data-country="' + countryShow + '">STATS</a>');
                        $("#buttonsDiv").append('<a href="#" class="btn maps" searchInput="' + searchTerm2 + '" data-lat="' + latInfo + '"data-long="' + longInfo + '" data-flag="' + flagImg + '" data-country="' + countryShow + '">MAP</a>');
                        $("#buttonsDiv").append('<a href="#" class="btn history" searchInput="' + searchTerm2 + '" data-flag="' + flagImg + '" data-pageID="' + countryPageID + '" data-country="' + countryShow + '">HISTORY</a>');
                        $("#buttonsDiv").append('<a href="#" class="btn actors" searchInput="' + searchTerm2 + '" data-name="' + searchTerm2 + '" data-country="' + countryShow + '">ACTORS</a>');

                        //move the search bar to the navbarbar
                        $("#buttonsDiv").append('<div class="field has-addons"> <div id="control"> <input class="input is-primary is-outlined searchInput2" type="text"></div><div id="control"><input class="button is-primary" type="submit" id="doSearch2" value="Submit"></div></div>')

                    });


                }
            });

        } //end of search term validator

        $('#ngramData').html('<iframe name="ngram_chart" src="https://books.google.com/ngrams/interactive_chart?content=' + searchTerm2 + '&year_start=1800&year_end=2008&corpus=0&smoothing=3&share=&direct_url=t1%3B%2C' + searchTerm2 + '%3B%2Cc0" width="100%" height="500px" marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no></iframe>');

    });

//tests the input term to make sure they are valid characters
    function validate(term) {
        if (term == "") {
            $("#ngramData").hide();
            $(".errorMg").text("Enter a name please")
            $(".errorMg").fadeIn('slow').animate({
                opacity: 1.0
            }, 1500).fadeOut('slow');
            return false;
        }
        if (!/^[a-zA-Z]*$/g.test(term)) {
            $("#ngramData").hide();
            $(".errorMg").text("Invalid characters")
            $(".errorMg").fadeIn('slow').animate({
                opacity: 1.0
            }, 1500).fadeOut('slow');
            return false;
        }
        return true;
    }

});