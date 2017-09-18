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
        })
         //added the parameters of the name

    });
})