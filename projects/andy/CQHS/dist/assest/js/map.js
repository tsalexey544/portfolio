// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const mapLocation = { lat: 53.567250, lng: -113.528538 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: mapLocation
  });
  const contentString =
    '<div id="content" class="p-2" style="max-width:280px;">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="text-muted">Canadian Quality Home services</h3>' +
    '<div id="bodyContent">' +
    "<p class='large text-muted'>1234 Tim Horton Ave Edmonton, AB NJ7KJS</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    pixelOffset: new google.maps.Size(0, -20)
  });
  const marker = new google.maps.Marker({
    position: mapLocation,
    map,
    icon: 'assest/img/icon/pin.png',
    title: "1234 Tim Horton Ave Edmonton, AB NJ7KJS"
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
