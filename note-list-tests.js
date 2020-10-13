// const { assert } = require("./test-lib");

(function() {
    var note = new Note("A note");
    noteList = new NoteList();
    noteList.addNote(note);
    assert.isEqualTo(noteList.notes[0], note)
  })(); 

  (function(){
    var note = new Note("A note");
    var note2 = new Note("A second note");
    noteList = new NoteList();
    noteList.addNote(note);
    noteList.addNote(note2);
    assert.isEqualTo(noteList.view(0) ,note);
  })();