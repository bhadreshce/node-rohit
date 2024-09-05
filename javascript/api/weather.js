const axios = require('axios')
const getWeather = (lat, long) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3b10cafef201e950474223e27b2951a6`

    return new Promise((resolve, reject) => {
        axios.get(url).then((result) => {
            resolve(result.data)
        }).catch((error) => {
            reject(error)
        })
    })
}


module.exports = {
    getWeather
}