class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}
	viewList(){
		return this.noteList.notes.text.join('-');
	}
}

