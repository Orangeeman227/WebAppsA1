let help = document.querySelector("#help");
let fields = document.querySelectorAll("input");

	// add a focus event handler to each text field
	for (let field of fields) {
    field.addEventListener("focus", event => {
      let text = event.target.getAttribute("data-help");
      help.textContent = text;

			// set location of the help text
			let location = event.target.getBoundingClientRect();
			help.style.left = location.left + location.width + 5 + "px";
			help.style.top = (location.top - location.height) + "px";
			help.style.visibility = "visible";

    });

		// add a blur event handler for each text field
    field.addEventListener("blur", event => {
      help.textContent = "";
			help.style.visibility = "hidden";
    });
  }
