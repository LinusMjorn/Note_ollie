class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}

	viewList(){
		var readyList = "<ul>"
		var allNotes = this.noteList.notes.texgt 
		for (var index = 0; index <= allNotes.length; index++) {
		readyList += "<li>" + allNotes[index] + "</li>";
	}
	return readyList + "</ul>";
}
}

