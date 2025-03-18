var audio = document.getElementById("audio")
function playAudio() {
  audio.play()
}

function stopAudio() {
  audio.load();
  audio.pause()
}

var play = document.getElementById("play")
var count = 1
function before() {
  if (count === 1) {
    audio.setAttribute("src", `../media/${count}.mp3`)
    count = 4
  }
  count--
  audio.setAttribute("src", `../media/${count}.mp3`)
  console.log(audio)
}
function after() {
  if (count === 3) {
    audio.setAttribute("src", `../media/${count}.mp3`)
    count = 0
  }
  count++
  audio.setAttribute("src", `../media/${count}.mp3`)
  console.log(audio)
}

