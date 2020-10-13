// function testNoteContainsText() {
//   var note = new Note("I smell good!");
//   assert.isEqualTo(note.text, "I smell good!");
// }
// testNoteContainsText();
// function checkArrayLength() {
//   var note = new Note();
//   note.text("I smell good!");
//   note.text("I smell bad!");
//   assert.isEqualTo(note.notes.length, 2);
// }
// checkArrayLength();

(function(){
  var note = new Note("I love JS");
  
  assert.isEqualTo(note.text, "I love JS");
})();
