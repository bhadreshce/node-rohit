const fs = require("fs");

const addData = (name, age) => {
    let mydata = readData()

    // mydata.map((item) => {
    //     if (item.name === name) {
    //         console.log('name already exists');
    //         process.exit(1);
    //     }


    // })

    const existingItem = mydata.find((item) => item.name === name);
    if (existingItem) {
        console.log('Name already exists');
        return
    }

    console.log(mydata);

    mydata.push({
        name: name,
        age: age
    })

    fs.writeFileSync('data.json', JSON.stringify(mydata))
    console.log('Data added successfully');
    return



}

const readData = () => {
    let Mydata = fs.readFileSync('data.json', 'utf-8')
    console.log(JSON.parse(Mydata));
    return JSON.parse(Mydata)
}

const deleteData = (name) => {
    let mydata = readData()
    //filter out
    mydata = mydata.filter((item) => item.name !== name);
    fs.writeFileSync('data.json', JSON.stringify(mydata))
    console.log('Data deleted successfully');
    return
}


module.exports = {

    addData,
    readData,
    deleteData

}
