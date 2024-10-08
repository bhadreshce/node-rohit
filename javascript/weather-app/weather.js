const axios = require('axios')
const getWeather = (latlong, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlong.lat}&lon=${latlong.lng}&appid=3b10cafef201e950474223e27b2951a6`


    axios.get(url).then((result) => {
        callback(result.data)
    }).catch((error) => {
        callback(undefined, error.message)
    })

}


module.exports = {
    getWeather
}