$(document).ready(function(){
    
    $("#wikisearchbotton").click(function(){
      var searchBox=$("#searchBox").val();
      var urlApi="https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchBox+"&format=json&callback=?";
    // console.log(urlApi[0]);
      
      $.ajax({
    type: 'GET',   
    dataType: "json",
    url: urlApi,
    async: false,
    success: function(data){
     $("#outRow").html(" ");
      for(var i=0;i<data[1].length;i++){
      var headingTerm=data[1][i];
      var termSumery=data[2][i];
      var termLink=data[3][i];
        
        $("#outRow").prepend("<a href="+termLink+"><ul id='output'><b>"+headingTerm+"</b><br><i>*"+termSumery+"*</i></ul></a>");
        
      console.log(headingTerm);
      console.log(termSumery);
      console.log(termLink);
      }//for loop end
    },
        error:function(errorAlert){
          alert("error")
        }
        
  });//ajax end
    //  $("#output").html(urlApi[1]);
      
    });//end click botton
    
    
  });//end of $(document)