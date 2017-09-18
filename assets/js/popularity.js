$(document).ready(function(){
    //when you click the submit button you get the results
    $(document).on("click", "#doSearch", function () {
        var nameSearch = $("#searchInput").val().trim();
        var namePop = "https://api.fullcontact.com/v2/name/stats.json?name=" + nameSearch + "&apiKey=e957faa606a34537";

        $.ajax({
        url: namePop,
        method: 'GET',
        }).done(function(response){
        console.log(response);
        //added the parameters of the name
        console.log("women:",response.name.given.female.count);
        console.log("men:",response.name.given.male.count);
        console.log("average age for women:", response.name.given.female.age.densityCurve.meanAge);
        console.log("average age for men:", response.name.given.male.age.densityCurve.meanAge);
        $("#dataShow").append("women:",response.name.given.female.count);
        $("#dataShow").append("men:",response.name.given.male.count);
        $("#dataShow").append("average age for women:", response.name.given.female.age.densityCurve.meanAge);
        $("#dataShow").append("average age for men:", response.name.given.male.age.densityCurve.meanAge);
        })
         

    });
})