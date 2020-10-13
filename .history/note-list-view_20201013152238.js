class NoteListView {
	constructor() {
		this.noteList = new noteList
	}
	viewList(){
		console.log(this.noteList.join('<ul><li> </li></ul>'));
	}
}

