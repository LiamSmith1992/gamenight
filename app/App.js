import { PlayersController } from "./Controllers/playerController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  playersController = new PlayersController()
}

window["app"] = new App();
