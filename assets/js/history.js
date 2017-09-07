$(document).on("click", ".history", function () {
    console.log("history button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    $("#dataShow").append('<p>History page - ' + countryShow + ' was passed through from button on Name Page</p>');
});