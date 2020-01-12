const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body)=>{
    const notes = loadNotes();
    let duplicateNotes = notes.filter(note=>note.title === title);
    if(duplicateNotes.length === 0){
        const newNote = {
            title: title,
            body: body
        }
        notes.push(newNote);
        debugger;
        saveNote(notes);
        console.log(chalk.green.inverse('Note Successfully Added!'));
    }
    else{
        console.log(chalk.red.inverse('Note title already taken'));
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const modifiedList = notes.filter(note=>note.title != title);

    if(notes.length === modifiedList.length){
        console.log(chalk.red.inverse('No such title exists'));
    }
    else{
        saveNote(modifiedList);
        console.log(chalk.green.inverse('Note removed successfully!'));
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.yellow.inverse('Your Notes: '));
    for(x of notes){
        console.log(chalk.blue.bold('Title:', x.title));
    }
}

const readNote = title=>{
    const notes = loadNotes();
    const reqNote = notes.find(note=>note.title===title);
    if(reqNote){
    console.log(chalk.blue.bold('->',reqNote.title));
    console.log(reqNote.body);
    }
    else{
        console.log(chalk.red.inverse('Note not found!'));
    }
}

const saveNote = notes=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=>{
    try{
    const bufferData = fs.readFileSync('notes.json');
    const jsonData = bufferData.toString();
    return JSON.parse(jsonData);
    }
    catch(err){
        return [];
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}