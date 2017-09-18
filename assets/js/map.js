$(document).ready(function(){

    
    $(document).on("click", ".maps", function (e) {
        e.preventDefault();
     var latval= parseInt($(this).attr("data-lat"));
     var longval=parseInt($(this).attr("data-long"));
        initMap(latval,longval);
        

    })


  function initMap(lat,long) {
    map = new google.maps.Map(document.getElementById('theMap'), {
      center: { lat: lat, lng: long },
      zoom: 4
    });
    var marker = new google.maps.Marker({
        position: { lat: lat, lng: long },
        map: map
      });
  }


})//end of document