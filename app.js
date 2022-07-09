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
        console.log("if")
    } else {
        message.style.display = "block"
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
        console.log("if")
    } else {
        message.style.display = "block"
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
}