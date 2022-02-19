let letters = {
	x: 0,
	y: 0,
	z: 2,
	sum: function(startVal = 0){
		return this.x + this.y + this.z + startVal;
	}
};

//console.log(letters.x);
//console.log(letters["x"]);
//console.log("The sum of all the values is: " + letters.sum(10));

let keys = Object.keys(letters);
console.log(keys[0]);
console.log(keys);

console.log(Object.values(letters));

let entries = Object.entries(letters);
console.log(entries);

for(let entry of entries){
	console.log("Key: " + entry[0] + " Value: " + entry[1]);
}
