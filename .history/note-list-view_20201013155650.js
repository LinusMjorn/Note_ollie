class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}

	viewList(){
		var readyList = "<ul>"
		var allNotes = this.noteList.notes
		for (var index = 0; index <= allNotes.length-1; index++) {
		readyList += "<li>" + allNotes[index].text + "</li>";
	}
	return readyList + "</ul>";
}
}

