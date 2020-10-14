(function () {
  var myList = new NoteList();
  myList.create("I am creating a first note");
  myList.create("I am creating a second note");
  var viewMyList = new NoteListView(myList);
  assert.isEqualTo(
    viewMyList.viewList(),
    "<ul><li>I am creating a first note</li><li>I am creating a second note</li></ul>"
  );
})();

(function () {
  var list = new NoteList();
  var viewList = new NoteListView(list);
  assert.isEqualTo(viewList.viewList(), null);
})();
