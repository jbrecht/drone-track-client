var socket = io('http://0.0.0.0:1337');

socket.emit('status_update', 'flying');

socket.on('timer_tick', function(data){
  console.log('timer_tick: ', data);
});
