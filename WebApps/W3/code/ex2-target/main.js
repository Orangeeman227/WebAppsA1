let buttons = document.querySelectorAll("button");

	// add a focus event handler to each text field
	for (let button of buttons) {
    button.addEventListener("click", handleButton);
  }

function handleButton(event){
	let students = loadData();
	let outputArea = document.getElementById("data");
	let content = "<ul>";

	// Acending button was clicked
	if(event.target.id == "acending"){
		students.sort();
	}
	else if(event.target.id == "decending"){
		students.reverse();
	}
	for(student of students){
		content += "<li>" + student + "<\li>";
	}
	content += "<\\ul>";
	outputArea.innerHTML = content;
}

function loadData(){
	let studentNames = [];
	for(student of students ){
		studentNames.push(student.fname + ", " + student.lname);
	}
	return studentNames;
}
