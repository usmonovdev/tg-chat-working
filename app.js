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