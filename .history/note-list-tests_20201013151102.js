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

  (function(){
   var myList = new NoteList();
   myList.create("I am creating a first note")
   myList.create("I am creating a second note")
   assert.isEqualTo(myList.view(0).text, "I am creating a first note")
  })();