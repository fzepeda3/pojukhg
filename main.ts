function Input () {
    if (userInput == 1) {
        userAction = "Rock"
    } else if (userInput == 2) {
        userAction = "Scissors"
    } else if (userInput == 3) {
        userAction = "Paper"
    } else {
        game.splash("invalid input")
        break;
    }
}
let userAction = ""
let userInput = 0
scene.setBackgroundImage(assets.image`BK1`)
let userWinner = 0
while (userWinner < 2) {
    userInput = game.askForNumber("", 1)
    if (true) {
    	
    }
    Input()
}
