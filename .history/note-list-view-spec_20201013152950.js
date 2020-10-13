  (function(){
   var myList = new NoteList();
   myList.create("I am creating a first note");
	 myList.create("I am creating a second note");
	 viewMyList = new NoteListView(myList); 
   assert.isEqualTo(viewList,<ul><li>I am creating a first note</li></ul><ul><li>I am creating a second note </li></ul> )
  })();