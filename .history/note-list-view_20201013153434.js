class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}
	viewList(){
		return (this.noteList.notes.join('<ul><li> </li></ul>'));
	}
}

