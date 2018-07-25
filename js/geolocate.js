var c = function(pos) {
  var lat     = pos.coords.latitude,
      long    = pos.coords.longitude,
      coords  = lat + '' + ',' + '' + long;
}

document.getElementById('get_location').onclick = function {
  navigator.geolocation.getCurrentPosition(c);
  return false;
}
