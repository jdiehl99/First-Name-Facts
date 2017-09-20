$(document).ready(function(){
    //get the name entered when the search button is clicked
    $(document).on("click", "#doSearch", function () {
        //grabs the information for the popularity of the searchTerm
        var nameSearch = $(".searchInput").val().trim();
        var namePop = "https://api.fullcontact.com/v2/name/stats.json?name=" + nameSearch + "&apiKey=e957faa606a34537";
        //sends name request through ajax
        $.ajax({
        url: namePop,
        method: 'GET',
        //displays the information related to the name
        }).done(function(response){
        //puts the number of men and women with the name on the page as well as their average age
        $("#popData").append("women:",response.name.given.female.count);
        $("#popData").append("men:",response.name.given.male.count);
        $("#popData").append("average age for women:", response.name.given.female.age.densityCurve.meanAge);
        $("#popData").append("average age for men:", response.name.given.male.age.densityCurve.meanAge);
        })
         

    });
})