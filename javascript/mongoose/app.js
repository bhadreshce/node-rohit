const mongoose = require('mongoose')
const url = 'mongodb+srv://bhadreshbavaliyatops:ZjU1Q1NwLItdM0ps@cluster0.pae29.mongodb.net/tops?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url).then((result) => {
    console.log('connected');
}).catch((err) => {
    console.log('failed to connect', err.message);
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name cannot exceed 50 characters'],
        trim: true
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'],
        lowercase: true,
        trim: true
    },
})

// userSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model('Student', userSchema)


const addStudent = () => {
    // const newUser = new User({
    //     name: '    Admin',
    //     email: 'admin@gmail.com',
    //     phone: 1234567890,
    //     address: '123 Main St',
    //     password: 'password123'
    // })

    // newUser.save().then(() => {
    //     console.log('User added successfully');
    // }).catch((err) => {
    //     console.log(err.message);
    // })


    // insertmany 

    // const user1 = new User({
    //     name: '    Admin',
    //     email: 'admin14@gmail.com',
    //     phone: 1234567890,
    //     address: '123 Main St',
    //     password: 'password123'
    // })

    // const user2 = new User({
    //     name: '    Admin',
    //     email: 'admin2@gmail.com',
    //     phone: 666666,
    //     address: '123 Main St',
    //     password: 'password123'
    // })

    // const user3 = new User({
    //     name: '    Admin',
    //     email: 'admin3@gmail.com',
    //     phone: 666666,
    //     address: '123 Main St',
    //     password: 'password123'
    // })

    // User.insertMany([user1, user2, user3]).then((result) => {
    //     console.log('Users added successfully', result.length);
    // }).catch((err) => {
    //     console.log(err.message);
    // })

}


// addStudent()


// const getUsers = () => {
//     User.find({
//         $or: [
//             { email: 'admin3@gmail.com' },
//             { name: 'Admin' },
//         ]
//     }).then((users) => {
//         console.log('Users:', users);
//     }).catch((err) => {
//         console.log(err.message);
//     });
// }


// getUsers()

// User.findById(userId)


// const updateByid = () => {
//     const updateData = { name: 'Updated Name', email: 'updatedemail@example.com' }; // Data to update

//     User.findByIdAndUpdate(
//         '66fbe51f610f817efcfc1797',
//         updateData,
//         { new: true, } // Options
//     )
//         .then((updatedUser) => {
//             if (updatedUser) {
//                 console.log('Updated User:', updatedUser);
//             } else {   
//                 console.log('User not found');
//             }
//         })
//         .catch((err) => {
//             console.log('Error:', err.message);
//         });
// }

// updateByid()