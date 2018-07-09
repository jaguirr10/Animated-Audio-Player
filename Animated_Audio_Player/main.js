$(document).ready(function(){
  $('audio').data('bpm','');
  $('.spinner-wrap').click(function(){
    var $this =$(this),audio = $this.siblings('audio')[0],bpm = $this.siblings('audio').data('bpm');
    console.log(bpm);
    if(audio.paused){
      audio.play();
      $this.addClass('playing');
    }else{
      audio.pause();
      $this.removeClass('playing');
    }
  });
});

