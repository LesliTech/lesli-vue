
function onEscape(callback, activate) {

    function onEscaping(event) {
        if (event.keyCode === 27) {
            callback()
            console.log("escaping")
            document.removeEventListener('keydown', onEscaping)
        }
    }

    if (activate === true) {
        console.log("activate")
        document.addEventListener('keydown', onEscaping)
    }
    
    if (activate === false) {
        console.log("deactivate")
        document.removeEventListener('keydown', onEscaping)
    }
}
