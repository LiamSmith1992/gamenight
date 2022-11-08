

export class Player {
  constructor(name, mood, points) {
    this.name = name
    this.mood = mood
    this.points = points
  }

  get Template() {
    return `

    <div class ="col-12 card text-center shadow p-2"></div>
      <h3 class = "text-warning">${this.name}</h3>
      <h3>${this.mood}</h3>
      <button class="btn btn-dark text-light" onclick="app.playersController.losePoint('${this.points}')"> - </button>
      <h3 class ="text-warning">${this.points}</h3>
      <button class="btn btn-dark text-light" onclick="app.playersController.gainPoint('${this.points}')"> + </button>
    </div>
    `

  }
}