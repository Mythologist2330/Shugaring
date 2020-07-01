let openPopup = document.getElementById('openPopup')
let overlay = document.getElementById('overlay')
let popup = document.getElementById('popup')
let popupButtonSubmit = document.getElementById('popupButtonSubmit')
let popupComplete = document.getElementById('popupComplete')

openPopup.onclick = () => {
    overlay.style.display = 'block'
    popup.style.display = 'flex'
}

popupButtonSubmit.onclick = () => {
    popup.style.display = 'none'
    popupComplete.style.display = 'flex'
}

(function(){
    let closePopup = document.getElementsByClassName('close-popup')
    for (let elem of closePopup) {
        elem.addEventListener('click', close)
    }
    function close () {
        this.parentElement.style.display = 'none'
        overlay.style.display = 'none'
    }
}())