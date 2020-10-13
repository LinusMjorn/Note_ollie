
function testAddingNoteObjects() {
    var note = new Note("A note");
    noteList = new NoteList();
    noteList.addNote(note);
    assert.isEqualTo(noteList.notes[0], note)
  }
  testAddingNoteObjects(); 