const player = document.querySelector('.player');
player.controls = "";

function togglePlay() {
  var element = document.querySelectorAll(".play");
      if (player.paused) {
        player.play();
        element.forEach(x => x.classList.toggle("active"));
      } else {
        player.pause();
        element.forEach(x => x.classList.toggle("active"));
    }

}


