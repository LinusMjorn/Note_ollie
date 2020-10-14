(function () {
  var myList = new NoteList();
  myList.create("I am creating first");
  myList.create("I am creating second");
  var viewMyList = new NoteListView(myList);
  assert.isEqualTo(
    viewMyList.viewList(),
    "<ul><li>I am creating first</li><li>I am creating second</li></ul>"
  );
})();

(function () {
  var list = new NoteList();
  var viewList = new NoteListView(list);
  assert.isEqualTo(viewList.viewList(), null);
})();

class NoteMocking {
  constructor(text) {
    this.text = text;
  }
}

class NoteListMock{
  constructor(note) {
    this.notes = [note]
  }
}

(function (){
  note = new NoteMocking("My name is Linus and i am 28 years old, jesus christ, im like 50 years away fron death.")
  noteList = new NoteListMock(note);
  noteListView = new NoteListView(noteList);
  console.log(noteListView.viewList())
  assertNew(noteListView.viewList() == "<ul><li>My name is Linus and</li></ul>", "checks that viewList only returns the first 20 characters of a note")


})();
