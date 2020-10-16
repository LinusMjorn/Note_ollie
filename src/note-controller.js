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
  getId(notehash){
    var id = notehash.split("notes/")
    return Number(id[1])
  }

  getNote(id){
    return this.noteList.view(id)
  }

  displayNote(note){
    var singleNoteView = new SingleNoteView(note)
    this.changeHTML("app", singleNoteView.displayView())
  }
}

var notecontroller =  new NoteController(new NoteList);
notecontroller.noteList.create("Hello, my name is elder price.")
notecontroller.changeHTML("app", notecontroller.noteListView.viewList());

//  write a test for this or something






