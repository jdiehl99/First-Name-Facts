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
        $("#popData").html("women:",response.name.given.female.count);
        $("#popData").append("men:",response.name.given.male.count);
        $("#popData").append("average age for women:", response.name.given.female.age.densityCurve.meanAge);
        $("#popData").append("average age for men:", response.name.given.male.age.densityCurve.meanAge);
        })
         

    });
})