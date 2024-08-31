// callback function

// function greet(name, callback) {

//     console.log(`Hello ${name}!`);
//     callback();

// }

// greet('John', function () {
//     console.log('Callback function called');
// });


// function fetchData(callback) {
//     console.log("Fetching data...");
//     setTimeout(() => {
//         console.log("Data fetched");
//         callback();
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data...");
// }

// // Using the callback
// fetchData(processData);


// Promises


const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a + b);
    });
}

const multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        resolve(a * b);
    });
}

const divison = (a, b) => {
    return new Promise((resolve, reject) => {
        reject('this is error');
    });
}


sum(5, 10).then((result) => {
    return multiply(result, 2);
}).then((result) => {
    return divison(result, 2);
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})