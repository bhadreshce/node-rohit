const giolocation = require('./giolocation')

const city = process.argv[2]



if (!city) {
    console.log('please inser city name');
    return
}
console.log(city);


const getdata = async () => {
    let location = await giolocation.getcityData(city)
    console.log(location.data.results);
}

getdata()
