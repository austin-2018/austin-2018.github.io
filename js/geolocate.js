var c = function(pos) {
  var lat     = pos.coords.latitude,
      long    = pos.coords.longitude,
      coords  = lat + ',' + long;

  document.getElementById('google_map').setAttributte('src', 'https://maps.google.co.uk/?q=' + coords + '&z=60&output=embed');
}

  document.getElementById('get_location').onclick = function() {
  navigator.geolocation.getCurrentPosition(c);
  return false;
}
