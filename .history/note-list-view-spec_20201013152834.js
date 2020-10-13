  (function(){
   var myList = new NoteList();
   myList.create("I am creating a first note");
	 myList.create("I am creating a second note");
	 viewMyList = new NoteListView(myList); 
   assert.isEqualTo(myList.view(0).text, "I am creating a first note")
  })();