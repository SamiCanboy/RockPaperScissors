document.body.style.backgroundColor = 'orange'

let gameDiv = document.createElement('div')
let title = document.createElement('h1')
let result = document.createElement('h1')
let rockButton = document.createElement('button')
let paperButton = document.createElement('button')
let scissorsButton = document.createElement('button')
let computerResult = document.createElement('button')
let compText = document.createElement('h2')
let computerScore = document.createElement('h1')
let playerScore = document.createElement('h1')
let playerText = document.createElement('h2')
let row0 = document.createElement('div')
let row1 = document.createElement('div')
let row2 = document.createElement('div')
let row3 = document.createElement('div')
let row4 = document.createElement('div')
let row5 = document.createElement('div')

row0.style = 'margin-right:auto;margin-left:auto;width:100px;border:3px solid;padding-right:5px;'
row1.style = 'margin-right:auto;margin-left:auto;width:100px;'
row2.style = 'margin-right:auto;margin-left:auto;width:100px'
row3.style = 'margin-right:auto;margin-left:auto;width:100px'
row4.style = 'margin-right:auto;margin-left:auto;width:200px;'
row5.style = 'margin-right:auto;margin-left:auto;width:100px;border:3px solid;padding-right:5px;'

compText.innerHTML = 'Computer'
compText.style.textAlign = 'center'
playerText.innerHTML = 'Player'
playerText.style.textAlign = 'center'
computerScore.innerText = 0
computerScore.style.textAlign = 'center'
playerScore.innerText = 0
playerScore.style.textAlign = 'center'
title.innerHTML = "RockPaperScissors"
title.style.textAlign = 'center'
result.innerHTML = 'Oyuna Başla'
result.style.textAlign = 'center'
computerResult.style = 'background: url("assets/1.png");background-size:cover;width:100px;height:100px;border-radius:100%;'
rockButton.style = 'background: url("assets/1.png");background-size:cover;width:100px;height:100px;border-radius:100%;'
paperButton.style = 'background: url("assets/2.png");background-size:cover;width:100px;height:100px;border-radius:100%;'
scissorsButton.style = 'background: url("assets/3.png");background-size:cover;width:100px;height:100px;border-radius:100%;'
gameDiv.style = 'align-items: center; background-color:display: flex;background-color:red;' 

computerResult.disabled = true;


row0.appendChild(compText)
row0.appendChild(computerScore)
row1.appendChild(computerResult)
row2.appendChild(result)
row3.appendChild(paperButton)
row4.appendChild(rockButton)
row4.appendChild(scissorsButton)
row5.appendChild(playerText)
row5.appendChild(playerScore)
gameDiv.appendChild(row0)
gameDiv.appendChild(row1)
gameDiv.appendChild(row2)
gameDiv.appendChild(row3)
gameDiv.appendChild(row4)
gameDiv.appendChild(row5)


document.body.appendChild(title)
document.body.appendChild(gameDiv)

