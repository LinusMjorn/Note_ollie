class NoteController {
	greet() {
		var element = document.getElementById('app');
		console.log(element);
	}

	changeGreeting(string) {
		var element = document.getElementById('app');
		element.innerHTML = string
	}
}