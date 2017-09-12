
$(document).ready(function(){
    


   $(document).on("click", ".history", function () {

    console.log("history button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    var countryID = $(this).attr("data-pageID");
    var flagInfo = $(this).attr("data-flag");


    var countryHistory;

    if(countryShow!=="Unknown"){
    // countryHistory=factbook.countries[countryShow.toLowerCase()].data.introduction.background


    https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exintro=true&format=json&titles=norway

    var JSONSite = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=true&titles=";
    JSONSite += countryShow;
    JSONSite += '&callback=?';

    // alert("This is executed normally.");

    $.getJSON(JSONSite,  function (data)
    {
        console.log(data.query.pages["extract"]);
    });
// var urlApi="https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=Stack%20Overflow";

        // $.ajax({
        //     type: 'GET',   
        //     dataType: "json",
        //     // url: urlApi,
        //     url:urlApi,
        //     // method:"GET"
        // }).done(function(data){
        //     console.log("you are cool");
        //     console.log(data);

        // })


    }else{
      countryHistory="Unknown Origin";
      }

    $("#dataShow").append('<p>'+countryHistory+'</p>');


});


    
  });//end of $(document)

