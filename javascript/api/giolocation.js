const axios = require('axios')


const gio = (location, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=524d083ba8b1473a95f2239ca9089d9c`


    callback('geocode')
    // axios.get(url).then((result) => {
    //     callback(result.data.results[0].geometry)
    // }).catch((error) => {
    //     callback(undefined, error)
    // })

}

module.exports = { gio };
