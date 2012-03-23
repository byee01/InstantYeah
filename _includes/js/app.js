soundManager.url = '/';
soundManager.onready(function(){
  var s = soundManager.createSound({
    id: 'yeah',
    url: 'yeah.mp3'
  });
});

function yeah() {
  soundManager.play('yeah');
}