const getNotes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

//console.log(getNotes());

yargs.version('1.2.1');

//creating commands
yargs.command({
    command: 'add',
    describe: 'This will add a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title:', argv.title);
        console.log('Body:', argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'This will remove a note',
    handler: function(){
        console.log('Removing a note!');
    }
});

yargs.command({
    command: 'read',
    describe: 'This will read a note',
    handler: function(){
        console.log('Reading a note!');
    }
});

yargs.command({
    command: 'list',
    describe: 'This will list all your notes',
    handler: function(){
        console.log('list your note!');
    }
});


yargs.parse();
// console.log(process.argv);
//console.log(yargs.argv);