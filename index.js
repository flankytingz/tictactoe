const table = document.getElementById("table")
var isXsTurn
var arrayTable

window.onload = () => {
    isXsTurn = true
    arrayTable = [
                    [null,null,null],
                    [null,null,null],
                    [null,null,null]
                ]
    table.onclick = handleMouseClick
}

function handleMouseClick(event) {
    console.log("Received a click event");

    if (event.target.tagName !== "IMG") {
        console.log("Skipped a non image click event");
        return
    }

    const row = event.target.id.slice(-2).slice(0,1)
    const col = event.target.id.slice(-1)

    if (isXsTurn) {
        event.target.src = "x.png"
        isXsTurn = false
        arrayTable[row][col] = "1"
    } else {
        event.target.src = "o.png"
        isXsTurn = true
        arrayTable[row][col] = "0"
    }

    const winner = checkForWinner()

    console.log(arrayTable[0][0],arrayTable[0][1],arrayTable[0][2])
    console.log(arrayTable[1][0],arrayTable[1][1],arrayTable[1][2])
    console.log(arrayTable[2][0],arrayTable[2][1],arrayTable[2][2])
    console.log(winner);
    if (winner == null) return

    if (winner === 1) {
        alert("X won!")
        location.reload()
    } else {
        alert("O won!")
        location.reload()
    }
}

function checkForWinner() {
    if ((arrayTable[0][0] === arrayTable[0][1]) && (arrayTable[0][1] === arrayTable[0][2]) && (arrayTable[0][0] != null)) {
        return arrayTable[0][0]
    }
    if ((arrayTable[0][0] === arrayTable[1][0]) && (arrayTable[1][0] === arrayTable[2][0]) && (arrayTable[0][0] != null)) {
        return arrayTable[0][0]
    }
    if ((arrayTable[0][1] === arrayTable[1][1]) && (arrayTable[1][1] === arrayTable[1][2]) && (arrayTable[0][1] != null)) {
        return arrayTable[1][1]
    }
    if ((arrayTable[1][0] === arrayTable[1][1]) && (arrayTable[1][1] === arrayTable[2][1]) && (arrayTable[1][0] != null)) {
        return arrayTable[1][1]
    }
    if ((arrayTable[2][0] === arrayTable[2][1]) && (arrayTable[2][1] === arrayTable[2][2]) && (arrayTable[2][0] != null)) {
        return arrayTable[2][2]
    }
    if ((arrayTable[0][2] === arrayTable[1][2]) && (arrayTable[1][2] === arrayTable[2][2]) && (arrayTable[0][2] != null)) {
        return arrayTable[2][2]
    }
    if ((arrayTable[0][0] === arrayTable[1][1]) && (arrayTable[1][1] === arrayTable[2][2]) && (arrayTable[0][0] != null)) {
        return arrayTable[1][1]
    }
    if ((arrayTable[0][2] === arrayTable[1][1]) && (arrayTable[1][1] === arrayTable[2][0]) && (arrayTable[0][2] != null)) {
        return arrayTable[1][1]
    }
    return null
}