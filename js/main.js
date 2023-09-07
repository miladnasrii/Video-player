var video = document.getElementById("video");
var pause = document.getElementById("pause");
function myFunction() {
  if (video.paused) {
    video.play();
    pause.innerHTML = "Pause";
  } else {
    video.pause();
    pause.innerHTML = "Play";
  }
}