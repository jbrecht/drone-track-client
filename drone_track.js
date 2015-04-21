$(document).ready(function() {

  var map = L.map('map');
  var status;

  L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'examples.map-i875mjb7'
  }).addTo(map);

  var getStatus = function() {
    if(status) {
      return ''+status;
    } else {
      return '';
    }
  };

  var marker = L.circle([0, 0], 2, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
  }).addTo(map);

  var serverURL = 'http://0.0.0.0';
  var socket = io(serverURL+':1337');

  $('#fly').button().click(function() {
    socket.emit('status_update', 'flying');
  });
  $('#pause').button().click(function() {
    socket.emit('status_update', 'paused');
  });
  $('#reset').button().click(function() {
    socket.emit('status_update', 'reset');
  });

  socket.on('timer_tick', function(data){
    status = data;
    marker.setLatLng(  L.latLng(data.position[0], data.position[1]));
  });

  socket.on('footprint', function(data){
    var footprint = data.footprint;
    console.log('footprint: ', footprint);
    var bounds = [
      [footprint[0], footprint[1]],
      [footprint[2], footprint[3]]
    ];
    console.log('bounds: ', bounds);
    map.fitBounds(bounds);
  });


});
