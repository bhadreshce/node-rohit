var headers = new Headers();
headers.append("X-CSCAPI-KEY", "TnhkcGRwNDR5NEdQcWFZd2xGMXhJT3FKbnBGSXBzVW1MT0o5a0tESA==");

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};


fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.json())
    .then((result) => {
        // console.log(result);
        var countryDrop = ''
        result.forEach(element => {
            countryDrop += `<option value="${element.iso2}" >${element.name}</option>`
        });

        document.getElementById("country").innerHTML = countryDrop;
    })
    .catch(error => console.log('error', error));


let countrynamae;
function loadStates(cname) {
    countrynamae = cname;
    console.log(cname);
    fetch(`https://api.countrystatecity.in/v1/countries/${cname}/states`, requestOptions)
        .then(response => response.json())
        .then((result) => {
            // console.log(result);
            var stateList = ''
            result.forEach(element => {
                stateList += `<option value="${element.iso2}" >${element.name}</option>`
            });
            document.getElementById("state").innerHTML = stateList;
        })
        .catch(error => console.log('error', error));

}

let stateName;;

function loadCities(sname) {
    stateName = sname;
    console.log(sname);
    fetch(`https://api.countrystatecity.in/v1/countries/${countrynamae}/states/${sname}/cities`, requestOptions)
        .then(response => response.json())
        .then((result) => {
            console.log(result);
            var cityList = ''
            result.forEach(element => {
                cityList += `<option value="${element.name}" >${element.name}</option>`
            });
            document.getElementById("city").innerHTML = cityList;
        })
        .catch(error => console.log('error', error));
}


let citname;
function getWeather(cityname) {
    citname = cityname

    let location = countrynamae + ',' + stateName + ',' + citname
    console.log(location);
    fetch('getdata?location=' + location).then((res) => {
        return res.json()
    }).then((result) => {
        console.log('whether data', result);
        if (result.error) {
            document.getElementById('description').innerText = result.error
        } else {
            document.getElementById('citydata').innerText = cityname
            document.getElementById('temrature').innerText = result.main.temp
            document.getElementById('description').innerText = result.weather[0].main
        }

    })

}