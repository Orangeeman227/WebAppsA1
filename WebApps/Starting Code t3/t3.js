populateStudents();

// TODO: add the input event listeners to the form fields. These event listeners should call
// the checkTextField method below
document.getElementById("studentID").addEventListener("input", checkTextField);
document.getElementById("firstName").addEventListener("input", checkTextField);
document.getElementById("lastName").addEventListener("input", checkTextField);
document.getElementById("assignmentGrade").addEventListener("input", checkTextField);
document.getElementById("tutorialGrade").addEventListener("input", checkTextField);
document.getElementById("examGrade").addEventListener("input", checkTextField);

// TODO: checks whether the input entered in a text field is valid
function checkTextField(event){
  let ident = event.target.id;

  if((ident =="studentID") || (ident == "assignmentGrade") || (ident == "tutorialGrade") || (ident == "examGrade")){
    if(isNaN(document.getElementById(ident).value)){ //should return true if it is not a number
    //red if not a number
    document.getElementById(ident).classList.add("error");
    document.getElementById(ident).classList.remove("valid");
  }
    else{
    document.getElementById(ident).classList.remove("error");
    document.getElementById(ident).classList.add("valid");
    //green if a number
    }

  }
  if((document.getElementById("studentID").value != "") && (isNaN(document.getElementById("studentID").value) == false) && (document.getElementById("assignmentGrade").value != "") && (isNaN(document.getElementById("assignmentGrade").value) == false) && (document.getElementById("tutorialGrade").value != "") && (isNaN(document.getElementById("tutorialGrade").value) == false) && (document.getElementById("examGrade").value != "") && (isNaN(document.getElementById("examGrade").value) == false) && (document.getElementById("firstName").value != "") && (document.getElementById("lastName").value != "")){
    document.getElementById("btnSubmit").disabled = false;
  }
  else{
    document.getElementById("btnSubmit").disabled = true;
  }




}
// TODO: processes the clicking of the submit button
function processForm(){
  document.getElementById("title").classList.add("error");

  let studentID = document.getElementById("studentID").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let assignmentGrade = document.getElementById("assignmentGrade").value;
  let tutorialGrade = document.getElementById("tutorialGrade").value;
  let examGrade = document.getElementById("examGrade").value;

  let table = document.querySelector("table");
  let row = document.createElement("tr");

  // create a cell for the student ID, update its text value, and append it to the row
  let iDCell = document.createElement("td");
  iDCell.textContent = studentID;
  row.appendChild(iDCell);

  // create a cell for the first name, update its text value, and append it to the row
  let fNameCell = document.createElement("td");
  fNameCell.textContent = firstName;
  row.appendChild(fNameCell);

  // create a cell for the last name, update its text value, and append it to the row
  let lNameCell = document.createElement("td");
  lNameCell.textContent = lastName;
  row.appendChild(lNameCell);

  // create a cell for the assignment grade, update its text value, and append it to the row
  let aGradeCell = document.createElement("td");
  aGradeCell.textContent = assignmentGrade.toFixed(2);
  row.appendChild(aGradeCell);


  // create a cell for the tutorial grade, update its text value, and append it to the row
  let tGradeCell = document.createElement("td");
  tGradeCell.textContent = tutorialGrade.toFixed(2);
  row.appendChild(tGradeCell);

  // create a cell for the exam grade, update its text value, and append it to the row
  let eGradeCell = document.createElement("td");
  eGradeCell.textContent = examGrade.toFixed(2);
  row.appendChild(eGradeCell);

  // append the row to the table
  table.appendChild(row);

}

// populate the table with student data from students.js file. We're reading information
// from an on object and using that to populate the table
function populateStudents(){
  let table = document.querySelector("table");

  // iterate through all the objects in the students array
  for(let student of students){
    // save the information for the current in variables
    let studentID = student.snum;
    let firstName = student.fname;
    let lastName = student.lname;
    let assignmentGrade = student.agrade;
    let tutorialGrade = student.tgrade;
    let examGrade = student.egrade;

    // time to create a new HTML element!
    // 1). we first need to create a new row
    let row = document.createElement("tr");

    // create a cell for the student ID, update its text value, and append it to the row
    let iDCell = document.createElement("td");
    iDCell.textContent = studentID;
    row.appendChild(iDCell);

    // create a cell for the first name, update its text value, and append it to the row
    let fNameCell = document.createElement("td");
    fNameCell.textContent = firstName;
    row.appendChild(fNameCell);

    // create a cell for the last name, update its text value, and append it to the row
    let lNameCell = document.createElement("td");
    lNameCell.textContent = lastName;
    row.appendChild(lNameCell);

    // create a cell for the assignment grade, update its text value, and append it to the row
    let aGradeCell = document.createElement("td");
    aGradeCell.textContent = assignmentGrade.toFixed(2);
    row.appendChild(aGradeCell);


    // create a cell for the tutorial grade, update its text value, and append it to the row
    let tGradeCell = document.createElement("td");
    tGradeCell.textContent = tutorialGrade.toFixed(2);
    row.appendChild(tGradeCell);

    // create a cell for the exam grade, update its text value, and append it to the row
    let eGradeCell = document.createElement("td");
    eGradeCell.textContent = examGrade.toFixed(2);
    row.appendChild(eGradeCell);

    // append the row to the table
    table.appendChild(row);
  }
}
