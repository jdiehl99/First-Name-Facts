$(document).ready(function(){

var nameSearch;
var namePop = "https://api.fullcontact.com/v2/name/stats.json?name=michael&apiKey=e957faa606a34537";

$.ajax({
    url: namePop,
    method: 'GET',
}).done(function(reponse){
    console.log(response);
})
    //add to the datashow div
    

})