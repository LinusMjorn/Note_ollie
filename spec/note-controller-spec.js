// Mocking
class NoteListViewMock {
  viewList() {
    return "<ul><li><div>Favourite food: pesto</div></li></ul>";
  }
}

// Test 1
(function () {
  noteController = new NoteController();
  assertNew(
    noteController instanceof NoteController,
    "check that we can initiate a instance of NoteController"
  );
})();

//Test 2
(function () {
  noteListViewMock = new NoteListViewMock();
  noteController = new NoteController();
  noteController.changeHTML("app", noteListViewMock.viewList());
  var element = document.getElementById("app");
  assertNew(
    element.innerHTML == "<ul><li><div>Favourite food: pesto</div></li></ul>",
    "check that we can change the innerHTML with Note Controller"
  );
})();
