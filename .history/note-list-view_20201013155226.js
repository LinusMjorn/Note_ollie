class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}

	viewList(){
		var readyList = "<ul>"
		var allNotes = this.noteList.notes 
		for (i = 0; i <= allNotes.length; i++) {
		readyList += "<li>" + allNotes[i] + "</li>";
	}
	return readyList + "</ul>";
}
}

