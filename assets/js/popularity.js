$(document).ready(function(){
    //when you click the submit button you get the results
    $(document).on("click", "#doSearch", function () {
        var nameSearch = $(".searchInput").val().trim();
        var namePop = "https://api.fullcontact.com/v2/name/stats.json?name=" + nameSearch + "&apiKey=e957faa606a34537";

        $.ajax({
        url: namePop,
        method: 'GET',
        }).done(function(response){
        //added the parameters of the name
        $("#popData").html("test");
        $("#popData").append("<table width="100%">");
        $("#popData").append("<tr><td>Women</td><td>"+response.name.given.female.count+"</td></tr>");
        $("#popData").append("<tr><td>Average Age</td><td>"+response.name.given.female.age.densityCurve.meanAge+"</td></tr>");    
        $("#popData").append("<tr><td>Men</td><td>"+response.name.given.male.count+"</td></tr>");
        $("#popData").append("<tr><td>Average Age</td><td>"+response.name.given.male.age.densityCurve.meanAge+"</td></tr>");
        $("#popData").append("</table>");

        // $("#popData").html("women:",response.name.given.female.count);
        // $("#popData").append("men:",response.name.given.male.count);
        // $("#popData").append("average age for women:", response.name.given.female.age.densityCurve.meanAge);
        // $("#popData").append("average age for men:", response.name.given.male.age.densityCurve.meanAge);
        // })
         

    });
})