class NoteController {
constructor(noteList){
	this.noteList = noteList
	this.noteListView = new NoteListView(this.noteList)


}

  getHTMLElement(id) {
    var element = document.getElementById(id);
    console.log(element);
  }

  changeHTML(id, htmlstring) {
    var element = document.getElementById(id);
    element.innerHTML = htmlstring;
  }
}
