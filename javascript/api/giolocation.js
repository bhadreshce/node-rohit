const axios = require('axios')


const getcityData = (city) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=524d083ba8b1473a95f2239ca9089d9c`


    return new Promise((resolve, reject) => {
        axios.get(url).then((result) => {
            resolve(result.data.results[0].geometry)
        }).catch((error) => {
            reject(error)
        })
    })
}


module.exports = {
    getcityData
}