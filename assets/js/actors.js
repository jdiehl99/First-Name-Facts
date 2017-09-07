$(document).on("click", ".actors", function () {
    console.log("actors button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    $("#dataShow").append('<p>Actors page - ' + countryShow + ' was passed through from button on Name Page</p>');
});