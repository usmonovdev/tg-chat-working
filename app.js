let gif = document.getElementById("gif")

let gifs = [
    "img/1.gif",
    "img/2.gif",
    "img/3.gif",
    "img/4.gif",
    "img/5.gif",
    "img/6.gif",
    "img/7.gif"
]

let randomgif;

function getRandomGif() {
    return gifs[Math.floor(Math.random() * gifs.length)]
}

function addToDom() {
    randomgif = getRandomGif()
    gif.src = randomgif;
}
addToDom()

function share() {
    let input = document.getElementById("input").value
    let chatMessage = document.getElementById("chatMes")
    let message = document.createElement("span")
    chatMessage.appendChild(message)
    message.appendChild(document.createTextNode(input))

    if (input.length < 1) {
        message.style.display = "none"
        gif.style.display = "block"
    } else {
        message.style.display = "block"
        gif.style.display = "none"
    }
}