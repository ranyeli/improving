function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`span[data-key="${e.keyCode}"]`);
 if(!audio) return;
 audio.currentTime = 0;
 audio.play();
 key.classList.add("playing");
}

function removeTransitions(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll('.key');
keys.forEach(k => k.addEventListener("transitionend", removeTransitions));

/*window.addEventListener("keyup", function(e){
  const key = document.querySelector(`span[data-key="${e.keyCode}"]`);
  key.classList.remove("playing");
});*/
