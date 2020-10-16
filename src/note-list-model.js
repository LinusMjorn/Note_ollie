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

create(string) {
    this.id = this.notes.length
    var note = new Note(string, this.id);
    this.addNote(note);
}


}