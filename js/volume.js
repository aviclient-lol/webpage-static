var original = 0.28

function mute() {
    var video = document.getElementById("video")
    video.muted = !video.muted
}

window.onfocus = function() {
    var audio = document.getElementById("audio")
    var video = document.getElementById("video")

    video.volume = original

    window.onclick = function() {
        mute()
        audio.style.color = video.muted ? "#fb4934" : "#b8bb26"
    }
}
