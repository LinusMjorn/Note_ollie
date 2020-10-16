class NoteListView {
  constructor(noteList) {
    this.noteList = noteList;
  }

  viewList() {
    var allNotes = this.noteList.notes;
    if (allNotes.length == 0) {
      return null;
    }
    var readyList = "<ul>";
    for (var index = 0; index <= allNotes.length - 1; index++) {
      readyList += "<li>" + '<a href=#notes/' + allNotes[index].id +  '>' +  allNotes[index].text.slice(0,20) + '</a>' + "</li>";
    }
    return readyList + "</ul>";
  }
}