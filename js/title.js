window.onload = function() {
    var idx = 0
    var direction = false
    var animated = "avi"
    setInterval(() => {
        if (idx == animated.length || !idx) direction = !direction
        idx = direction ? ++idx : --idx
        document.title = "✈ ".concat(!idx ? " " : animated.slice(0, idx));
    }, 225)
}