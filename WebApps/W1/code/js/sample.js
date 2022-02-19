// Introduction to JavaScript
let username = prompt("What is your name?");

//alert("Hello, " + username + " welcome to our website!");

console.log("Hello, " + username + " welcome to our website!");

(function(p1, p2){
	console.log(p1 + p2);
})(4, 5);

const name = function(p1, p2){
	console.log(p1);
};

name(4, 5);
let y = name;
y("Hello");

// Higer-order functions
function greaterThan(n){
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

function add(x, y){
  return x + y;
}
function substract(x, y){
  return y - x;
}
function process(x, y, processor){
  return processor(x, y);
}

let retVal = process(5, 15, substract);
console.log(retVal);

// Introduction to DOM
let intro = document.getElementById('intro_para');

intro.innerHTML = "This is the updated intro paragraph!!";

intro.setAttribute("style", "background-color:blue;");

intro.style.color = "white";

let img = document.getElementsByTagName("img");

img[0].setAttribute("src", "images/img2.jpeg");

let header = document.createElement("h1");
let h_value = document.createTextNode("This is our new header!!");

header.appendChild(h_value);

let body = document.getElementsByTagName("body");
body[0].appendChild(header);

let oldheader = document.getElementsByTagName("h1");
body[0].removeChild(oldheader[0]);

let img = document.getElementById("img1");
img.onclick = imgHandler;

let a = document.getElementById("link1");
a.onclick = linkHandler;

function imgHandler(){
  img.style.display = "none";
}

function linkHandler(){
  img.style.display = "block";
}
