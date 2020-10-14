class NoteController {
  getHTMLElement(id) {
    var element = document.getElementById(id);
    console.log(element);
  }

  changeHTML(id, string) {
    var element = document.getElementById(id);
    element.innerHTML = string;
  }
}
