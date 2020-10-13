class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}

	viewList(){
		var readyList = "<ul>"
		var allNotes = this.noteList.notes
		for (var index = 0; index <= allNotes.length; index++) {
		readyList += "<li>" + allNotes.text[index] + "</li>";
	}
	return readyList + "</ul>";
}
}

