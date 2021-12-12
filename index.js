// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The location of orchard
    const orchard={ lat:1.3051828, lng: 103.8298074}
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: orchard,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: orchard,
      map: map,
    });
  }