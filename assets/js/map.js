$(document).ready(function () {


  $(document).on("click", ".maps", function (e) {
    e.preventDefault();
    // empty out any data still showing from other buttons
    $("#buttonOutput").empty();
    $("#ngramData").empty();
    $("#theMap").empty();
    $("#theMap").show();
    var newFlag=$(this).attr("data-flag");
    var latval = parseInt($(this).attr("data-lat"));
    var longval = parseInt($(this).attr("data-long"));
    initMap(latval, longval, newFlag);


  })


  function initMap(lat, long, flags) {
    map = new google.maps.Map(document.getElementById('theMap'), {
      center: { lat: lat, lng: long },
      zoom: 4
    });
    var iconBase="assets/images/flags-mini/"+flags;   
    var marker = new google.maps.Marker({
      position: { lat: lat, lng: long },
      icon: iconBase,
      map: map
    });
  }


})//end of document