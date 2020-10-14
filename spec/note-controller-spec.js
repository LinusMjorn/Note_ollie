(function () {
  noteController = new NoteController();
  assertNew(
    noteController instanceof NoteController,
    "check that we can initiate a instance of NoteController"
  );
})();
