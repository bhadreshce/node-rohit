const giolocation = require('./giolocation')
const weather = require('./weather')
const city = process.argv[2]



if (!city) {
    console.log('please insert city name');
    return
}
console.log(city);


const getdata = async () => {
    let location = await giolocation.getcityData(city)
    let w = await weather.getWeather(location.lat, location.lng)
    console.log(w);
}

getdata()
