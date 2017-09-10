$(document).ready(function(){
    

  $(document).on("click", ".history", function () {
    console.log("history button was clicked");
    event.preventDefault();

    var countryShow = $(this).attr("data-country");
    $("#dataShow").append('<p>History page - ' + countryShow + ' was passed through from button on Name Page</p>');
});




 
console.log(factbook.countries.argentina.data.introduction.background);




  //   $("#addSearch").on("click",function(){
  //     event.preventDefault();
  //     var searchBox=$("#searchInput").val();
  //     var urlApi="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchBox+"&format=json&callback=?";
  //    console.log(urlApi[0]);
      
  //     $.ajax({
  //   type: 'GET',   
  //   dataType: "json",
  //   url: urlApi,
  //   async: false,
  //   success: function(data){
  //    $("#dataShow").html(" ");
  //     for(var i=0;i<data[1].length;i++){
  //     var headingTerm=data[1][i];
  //     var termSumery=data[2][i];
  //     var termLink=data[3][i];
        
  //       $("#dataShow").prepend("<a href="+termLink+"><ul id='output'><b>"+headingTerm+"</b><br><i>*"+termSumery+"*</i></ul></a>");
        
  //     console.log(headingTerm);
  //     console.log(termSumery);
  //     console.log(termLink);
  //     }//for loop end
  //   },
  //       error:function(errorAlert){
  //         alert("error")
  //       }
        
  // });//ajax end
      
  //   });//end click botton
    
    
  });//end of $(document)