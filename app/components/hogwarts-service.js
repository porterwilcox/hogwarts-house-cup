import House from "../models/House.js";


let potterApi = axios.create({
    baseURL: "https://www.potterapi.com/v1/",
    timeout: 3000
})

let _apiKey = '$2a$10$ACiYG3Qon3uDwfXZxaA0COJwmhiFMXuiMerk.UrYDHY/9HEjhEkOW'
let _houses = []

function errorHandler(e) {
    let message = e.message || 'something horrible has happened'
    let status = e.status || 404
    console.error(message, status, e)
}

export default class HogwartsService {
    constructor(cb) {
        this.getHouses(cb)
    }

    get Houses() {
        return _houses.filter(h => h)
    }

    getHouses(cb) {
        potterApi.get('/houses?key=' + _apiKey)
            .then(res => {
                console.log(res)
                let serverHouses = res.data
                _houses = serverHouses.map(h => new House(h))
                console.log(_houses)
                cb()
            })
            .catch(errorHandler)
    }
}