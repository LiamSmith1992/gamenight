import { appState } from "../AppState.js";








export class PlayersController {
  constructor() {
    this.drawPlayers()
  }

  drawPlayers() {
    let template = ''
    appState.players.forEach(p => template += p.Template)
    document.getElementById('app').innerHTML = template
  }

  createPlayer() {
    window.event.preventDefault()
    const form = window.event.target
    let playerData = {
      name: form.name.value,
      mood: form.mood.value,
      points: form.points.value
    }
    form.removeEventListener()
    this.drawPlayers()
  }

  losePoint() {
    playersService.losePoint()
    this.drawPlayers
  }

}
