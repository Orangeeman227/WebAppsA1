window.onload = function() {
	document.querySelector('div').addEventListener("click", handleDiv);
	document.querySelector('button').addEventListener("click", handleButton);

	document.querySelector('a').addEventListener("click", event => {
		console.log("The link has been clicked!");
		event.preventDefault();
	});
};

function handleDiv(){
	console.log("The div is clicked!");
}

function handleButton(event){
	console.log("The button is pressed!");
	event.stopPropagation();

}
