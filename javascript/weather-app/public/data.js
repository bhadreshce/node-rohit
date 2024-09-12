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
            console.log(result);
        })
        .catch(error => console.log('error', error));

}