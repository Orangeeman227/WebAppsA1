let help = document.querySelector("#help");
let field = document.querySelector("#password");

	// add a focus event handler to each text field
	field.addEventListener("input", event => {
		let text = "Password is less than 8 characters";

		if(field.value.length < 8){
			help.textContent = text;
		}
		else{
			help.textContent = "Password meets requirements ";
			help.style.backgroundColor = "green";
		}

		// set location of the help text
		let location = event.target.getBoundingClientRect();
		help.style.left = location.left + location.width + 5 + "px";
		help.style.top = (location.top - location.height) + "px";
		help.style.visibility = "visible";
	});
