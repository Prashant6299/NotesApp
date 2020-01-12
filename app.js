const notes = require('./notes');
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
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'This will remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'read',
    describe: 'This will read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.command({
    command: 'list',
    describe: 'This will list all your notes',
    handler(){
        notes.listNotes();
    }
});


yargs.parse();
// console.log(process.argv);
//console.log(yargs.argv);