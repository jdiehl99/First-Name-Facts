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
        var datBox = $('#popData'),
        table = $('<table class="poppD">');
        var tr = $('<tr><td class="poppD">Women:</td>');
        tr.append('<td class="poppD">' + response.name.given.female.count + '</td>');
        table.append(tr);
        var tr2 = $('<tr><td class="poppD">Avg age:</td>');
        tr2.append('<td class="poppD">' + response.name.given.female.age.densityCurve.meanAge + '</td>');
        table.append(tr2);
        var tr3 = $('<tr><td class="poppD">Men:</td>');
        tr3.append('<td class="poppD">' + response.name.given.male.count + '</td>');
        table.append(tr3);
        var tr4 = $('<tr><td class="poppD">Avg age:</td>');
        tr4.append('<td class="poppD">' + response.name.given.male.age.densityCurve.meanAge + '</td>');
        table.append(tr4);
        datBox.append(table);


        // $("#popData").append("women:",response.name.given.female.count);
        // $("#popData").append("men:",response.name.given.male.count);
        // $("#popData").append("average age for women:", response.name.given.female.age.densityCurve.meanAge);
        // $("#popData").append("average age for men:", response.name.given.male.age.densityCurve.meanAge);
        })
    });
})