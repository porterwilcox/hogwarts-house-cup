export default class House {
    constructor(houseData) {
        this.name = houseData.name,
        this.mascot = houseData.mascot,
        this.colors = houseData.colors,
        this.head = houseData.headOfHouse,
        this.points = 0
    }

    draw() {
        return `
        <div class="col-12 col-md-3">
            <div class="card m-1">
                <h3 class="card-header">${this.name}</h3>
                <div class="card-body text-center">
                    <h1>${this.points}</h1>
                    <h5>${this.head}</h5>
                    <p>${this.mascot}</p>
                </div>
            </div>
        </div>
        `
    }
}