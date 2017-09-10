$(document).on("click", ".maps", function () {
    console.log("maps button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    $("#dataShow").append('<p>Maps page - ' + countryShow + ' was passed through from button on Name Page</p>');
});