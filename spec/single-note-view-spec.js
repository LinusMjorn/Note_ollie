//Test 1
(function () {
  singleNoteView = new SingleNoteView();
  assertNew(
    singleNoteView instanceof SingleNoteView,
    "Check that we can initiate a instance of Single Note View"
  );
})();

// Mock Note Model
class NoteMock {
  constructor(text) {
    this.text = text;
  }
}
//Test 2
(function () {
  note = new NoteMock("Test Note");
  singleNoteView = new SingleNoteView(note);
  assertNew(
    singleNoteView.note.text == "Test Note",
    "check that we can add a note model in the contructor and access it"
  );
})();

//Test 3
(function () {
  note = new NoteMock("Favourite drink: seltzer");
  singleNoteView = new SingleNoteView(note);
  assertNew(
    singleNoteView.displayView() == "<div>Favourite drink: seltzer</div>",
    "check that we return the HTML for a single note"
  );
})();
