function initMap(){
    var location = {lat: 42.566190, lng: 21.132508};
    var options = {
      zoom: 16,
      center: location 
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    var infoWindow = new google.maps.InfoWindow ({
      content: '<p class="lead">BK Group</p>'
    });

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    })
  }