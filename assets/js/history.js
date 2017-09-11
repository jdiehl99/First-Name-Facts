
$(document).ready(function(){
    


   $(document).on("click", ".history", function () {

    console.log("history button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    var countryID = $(this).attr("data-pageID");
    var flagInfo = $(this).attr("data-flag");
    

    var countryHistory;
    if(countryShow!=="Unknown"){
    countryHistory=factbook.countries[countryShow.toLowerCase()].data.introduction.background
    }else{
      countryHistory="Unknown Origin";
      }

    $("#dataShow").append('<p>'+countryHistory+'</p>');



});


    
  });//end of $(document)

