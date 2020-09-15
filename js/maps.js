function initMap(){
    var location = {lat: 42.230235, lng: 21.256846};
    var options = {
      zoom: 16,
      center: location //42.230235, 21.256846
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    var infoWindow = new google.maps.InfoWindow ({
      content: '<p class="lead">Ristorante Salute</p>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    })
  }