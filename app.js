let gif = document.getElementById("gif");
let gifArr = [
    "img/1.gif",
    "img/2.gif",
    "img/3.gif",
    "img/4.gif",
    "img/5.gif",
    "img/6.gif",
    "img/7.gif"
];
let addDom;

function sortgifs() {
    return gifArr[Math.floor(Math.random() * gifArr.length)]
}

function toDom() {
    addDom = sortgifs()
    gif.src = addDom;
}

toDom();

function shareR() {
    let input = document.getElementById("input").value
    let chatMessage = document.querySelector(".chatBox")
    let message = document.createElement("span")
    let div = document.createElement("div")
    div.setAttribute("class", "spanBoxR")
    div.appendChild(message)
    chatMessage.appendChild(div)
    message.appendChild(document.createTextNode(input))

    if (input.length < 1) {
        message.style.display = "none"
        gif.style.display = "block"
        console.log("if")
    } else {
        message.style.display = "block"
        gif.style.display = "none"
        console.log("else")
    }

    document.getElementById("form").reset()
}

function shareL() {
    let input = document.getElementById("input").value
    let chatMessage = document.querySelector(".chatBox")
    let message = document.createElement("span")
    let div = document.createElement("div")
    div.setAttribute("class", "spanBoxL")
    div.appendChild(message)
    chatMessage.appendChild(div)
    message.appendChild(document.createTextNode(input))

    if (input.length < 1) {
        message.style.display = "none"
        gif.style.display = "block"
        console.log("if")
    } else {
        message.style.display = "block"
        gif.style.display = "none"
        console.log("else")
    }

    document.getElementById("form").reset()
}

function sendFile() {
    let chatMessage = document.querySelector(".chatBox")
    let img = document.createElement("img")
    img.setAttribute("class", "imgOpen")
    let div = document.createElement("div")
    div.setAttribute("class", "spanBoxR")
    div.appendChild(img)
    chatMessage.appendChild(div)

    let sendFInp = document.getElementById("sendFile")

    sendFInp.addEventListener("change", function() {
        const choosFile = this.files[0]

        if (choosFile) {
            const reader = new FileReader()

            reader.addEventListener("load", function() {
                img.setAttribute("src", reader.result);
            });

            reader.readAsDataURL(choosFile)
        }
    });

    if (input.length < 1) {
        gif.style.display = "block"
    } else {
        gif.style.display = "none"
    }
}