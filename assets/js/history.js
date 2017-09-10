
$(document).ready(function(){
    


   $(document).on("click", ".history", function () {

    console.log("history button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");


    var x=countryShow.toLowerCase();
    var first=factbook.countries[x].data.introduction.background


    $("#dataShow").append('<p>'+first+'</p>');



});


    
  });//end of $(document)

