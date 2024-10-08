const mongoose = require('mongoose')

// const MongoClient = mongo.MongoClient
// console.log(MongoClient);

const dburl = 'mongodb+srv://admin:ce17@bbb3@cluster0.my1is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster07'

// mongoose.connect(dburl).then(() => {
//     console.log("db connected");
// }).catch(err => {
//     console.log(err);
// })

// mongodb+srv://admin:<db_password>@cluster0.my1is.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// MongoClient.connect(url).then((result) => {
//     console.log('connection established');
//     // console.log(result);
//     const db = result.db('MyDb');
//     // const collection = db.collection('demo');

//     db.createCollection('mahendara').then((collection) => {
//         console.log(collection);
//     });


// collection.  ({ name: 'test', age: 13, salarry: '2000' }).then((result) => {
//     console.log('data inserted');
// });

// const empl = [{ name: 'rahul', age: 30, salarry: '5000' }, { name: 'mehul', age: 30, salarry: '5000' }, { name: 'suresh', age: 30, salarry: '5000' }, { name: 'ramesh', age: 30, salarry: '5000' }]
// collection.insertMany(empl).then((result) => {
//     console.log('data inserted');
// });

// collection.findOne({ age: 30 }).then((result) => {
//     console.log(result);
// })

// collection.find({ age: 30 }, { projection: { age: 1, name: 1 } }).toArray().then((result) => {
//     console.log(result);
// })

// collection.deleteOne({ age: 30 }).then(() => {
//     console.log('deleted');
// })
  
 
// collection.updateMany({ age: 30 }, { $set: { salary: 10000 } }).then(() => {
//     console.log('updated');
// });

// })  


let num = 5 

 

