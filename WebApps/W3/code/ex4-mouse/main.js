let body = document.querySelector("div");

body.addEventListener("click", event => {
	let x = event.clientX;
	let y = event.clientY;

	let element = document.createElement("span");
	element.innerHTML = "&nbsp;";
	element.style.top = y + "px";
	element.style.left = x + "px";

	element.addEventListener("click", event2 => {
		element.style.backgroundColor = "darkblue";
		event2.stopPropagation();
	});

	body.append(element);
});
