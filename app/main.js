import HogwartsController from "./components/hogwarts-controller.js";

class App {
    constructor() {
        this.controllers = {
            hogwartsController: new HogwartsController()
        }
        console.log('main is here')
    }
}

window["app"] = new App()