import HogwartsService from "./hogwarts-service.js";

let _hogwartsService = new HogwartsService(drawHouses)

function drawHouses() {
    let houses = _hogwartsService.Houses
    let template = ''
    houses.forEach(h => {
        template += h.draw()
    })
    document.querySelector('#houses').innerHTML = template
}

export default class HogwartsController {
    constructor() {
        console.log('controller is present')
    }
}