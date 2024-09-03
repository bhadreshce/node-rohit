const yargs = require("yargs");
const file = require("./file");
yargs.command({
    command: 'add',
    describe: 'Add user',
    builder: {
        name: {
            describe: 'Name of the person',
            demandOption: true,
            type: 'string'
        },
        age: {
            describe: 'age of the person',
            demandOption: true,
            type: 'number'
        }
    },
    handler(argv) {
        // console.log(argv);
        file.addData(argv.name, argv.age);
    }

});

yargs.command({
    command: 'read',
    describe: 'read user',

    handler(argv) {
        // console.log(argv);
        file.readData();
    }

})

yargs.command({
    command: 'delete',
    describe: 'delete user',
    builder: {
        name: {
            describe: 'Name of the person',
            demandOption: true,
            type: 'string'
        },

    },
    handler(argv) {
        // console.log(argv);
        file.deleteData(argv.name);
    }

});



yargs.argv