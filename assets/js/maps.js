$(document).on("click", ".maps", function () {
    console.log("maps button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    var flagInfo = $(this).attr("data-flag");

    // google maps API key AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k
    // 
    //

    var mapQuery = "https://maps.googleapis.com/maps/api/geocode/json?address="+countryShow+"""&key=AIzaSyDrHgJVlCVFzRNb_R4wjMg38LyZOxsIF4k";
    

    //   var map;
    //   function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //       center: {lat: -34.397, lng: 150.644},
    //       zoom: 8
    //     });
    //   }


    $("#dataShow").append('<p>Maps page - ' + countryShow + ' was passed through from button on Name Page</p>');
});