// ! Question 1

function submitform(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    if(email.value == "" || password.value == "" ){
    
        alert("Ensure you input value in both fields");
    
        }else{

            

        alert("Form has been successfully submitted");
        alert("Check your email and password in console");
        console.log("Your email : "," ",email.value);
        console.log("You Password : "," ",password.value);

        
    }

}

document.getElementById('butn').addEventListener("change",function(){
    let passwordcheck = document.getElementById('password');
    if(this.checked){
        passwordcheck.type="text";
    }else{
        passwordcheck.type="password";
    }
})

let butn = document.getElementById('batn');
let inputs = document.querySelectorAll('input');

butn.addEventListener("click",function(){
    inputs.forEach(input => input.value="");
        

})


// ! Question 2

let showtext = document.querySelector('.moretext');
let readmorebutton = document.getElementById('readbutton');

readmorebutton.addEventListener("click",function(){
    if (showtext.style.display === "none" || showtext.style.display === "") {
        showtext.style.display = "inline";
        readmorebutton.innerText = "Read Less";
      } else {
        showtext.style.display = "none";
        readmorebutton.innerText = "Read More";
      }
})


// ! question 3

function addstudent() {
    let name = document.getElementById("name").value;
    let fathername = document.getElementById("fathername").value;
    let coursename = document.getElementById("coursename").value;

  let table = document.getElementById('Studenttable').getElementsByTagName('tbody')[0];
  let newrow = table.insertRow(table.rows.length);

  let cell1 = newrow.insertCell(0);
  let cell2 = newrow.insertCell(1);
  let cell3 = newrow.insertCell(2);
  let cell4 = newrow.insertCell(3);

  cell1.innerHTML = name;
  cell2.innerHTML = fathername;
  cell3.innerHTML = coursename;
  cell4.innerHTML = '<button class="editbtn" onclick="editStudent(this)">Edit</button> <button class="deltbtn" onclick="deleteStudent(this)">Delete</button>';

  document.getElementById("studentForm").reset();

}

function deleteStudent(button){
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editStudent(button){
 let row = button.parentNode.parentNode;
 let cells = row.getElementsByTagName('td')

 document.getElementById('editname').value = cells[0].innerHTML;
 document.getElementById('editfathername').value =cells[1].innerHTML;
 document.getElementById('editcoursename').value = cells[2].innerHTML;

 document.getElementById('edit-form').style.display="block"
}

function updatestudent(){

    let updateName = document.getElementById("editname").value;
    let updateFathername = document.getElementById("editfathername").value;
    let updateCoursename = document.getElementById("editcoursename").value;

    let table2 = document.getElementById("Studenttable").getElementsByTagName("tbody")[0];
    let newrow2 = table2.insertRow(table2.rows.length);

    let cell1 = newrow2.insertCell(0);
    let cell2 = newrow2.insertCell(1);
    let cell3 = newrow2.insertCell(2);
    let cell4 = newrow2.insertCell(3);

    cell1.innerHTML = updateName;
    cell2.innerHTML = updateFathername;
    cell3.innerHTML = updateCoursename;
    cell4.innerHTML = '<button class="editbtn" onclick="editStudent(this)">Edit</button> <button class="deltbtn" onclick="deleteStudent(this)">Delete</button>';
    
    document.getElementById("edit-form").style.display="none"


}