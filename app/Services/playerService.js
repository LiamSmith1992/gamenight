import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";






class PlayersService {

  losePoint(name) {
    let player = appState.players.find(p => p.name == name)
    player.points--
  }

  gainPoint(name) {
    let player = appState.players.find(p => p.name == name)
    player.points++
  }

  createPlayer(playerData) {
    let newPlayer = new Player(playerData.name, playerData.mood, playerData.points)
    appState.players.push(newCharacter)
  }
}

export const playersService = new PlayersService

