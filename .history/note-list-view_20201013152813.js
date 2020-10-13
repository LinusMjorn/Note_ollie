class NoteListView {
	constructor(noteList) {
		this.noteList = noteList
	}
	viewList(){
		console.log(this.noteList.notes.join('<ul><li> </li></ul>'));
	}
}

