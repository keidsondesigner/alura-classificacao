const paulo = {
    name: "Paulo",
    victories: 2,
    ties: 5,
    defeats: 1,
    points: 0
}

const rafa = {
    name: "Rafa",
    victories: 3,
    ties: 5,
    defeats: 2,
    points: 0
}

const gui = {
    name: "Gui",
    victories: 1,
    ties: 5,
    defeats: 4,
    points: 0
}

calculatePoints = (player) => {
    const points = (player.victories * 3) + player.ties
    return points
}

paulo.points = calculatePoints(paulo)
rafa.points = calculatePoints(rafa)
gui.points = calculatePoints(gui)

const players = [rafa, paulo, gui]

viewScreen = (players) => {
    let tableBody = ""
    for(i = 0; i < players.length; i++){
        tableBody += `<tr><td>${players[i].name}</td>`
        tableBody += `<td>${players[i].victories}</td>`
        tableBody += `<td>${players[i].ties}</td>`
        tableBody += `<td>${players[i].defeats}</td>`
        tableBody += `<td>${players[i].points}</td>`
        tableBody += `<td><button onClick='addVictories(${i})'>Vitória</button></td>`
        tableBody += `<td><button onClick='addTies(${i})'>Empates</button></td>`
        tableBody += `<td><button onClick='addDefeats(${i})'>Derrotas</button></td></tr>`
    }
    const tablePlayers = document.querySelector("#tabelaJogadores")
    tablePlayers.innerHTML = tableBody
}

viewScreen(players)

addVictories = (i) => {
    let updatedPoints = players[i]
    updatedPoints.victories++
    updatedPoints.points = calculatePoints(updatedPoints)
    viewScreen(players)

}

addTies = (i) => {
    let updatedTies = players[i]
    updatedTies.ties++
    updatedTies.points = calculatePoints(updatedTies)
    viewScreen(players)

} 

addDefeats = (i) => {
    let updatedDefeats = players[i]
    updatedDefeats.defeats++
    updatedDefeats.points = calculatePoints(updatedDefeats)
    viewScreen(players)

}
