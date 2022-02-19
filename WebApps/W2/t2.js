let people = [
  {
    name: "Paul",
    age: 64,
    occupation: Bassist,
    salary: 1000000
  },
  {
    name: "John",
    age: 40,
    occupation: Vocalist,
    salary: 10000
  },
  {
    name: "Ringo",
    age: 81,
    occupation: Drummer,
    salary: 100000
  },
  {
    name: "George",
    age: 58,
    occupation: Guitarist,
    salary: 1000
  },
  {
    name: "Glyn",
    age: 79,
    occupation: Producer,
    salary: 100
  },
]
people(print_people);

function print_people(value, index, array){
var lowestAge = 100;
var lowestIndex = 0;

for(let i=0, i<.length;i++){
	if(i=0){
    lowestAge=array[i].value(age)
    }
    else if(array[i].age < array [i-1].age){
    lowestIndex = i;
    }
//console.log(array[lowestIndex].age)
}
