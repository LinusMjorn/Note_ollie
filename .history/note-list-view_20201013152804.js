class NoteListView {
	constructor(noteList) {
		this.noteList = new noteList
	}
	viewList(){
		console.log(this.noteList.notes.join('<ul><li> </li></ul>'));
	}
}

