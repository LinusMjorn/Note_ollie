class NoteList {
constructor() {
    this.notes = [];
}
addNote(note){
    this.notes.push(note);
}
view(index){
    return this.notes[index];
}


}