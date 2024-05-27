function addtodo() {
    var input = document.getElementById("todo-input");
    // console.log(input.value);

    var list = document.getElementById("list-item");

    var listElement = document.createElement("li");

    var listText = document.createTextNode(input.value);

    listElement.appendChild(listText);

    // ***************Del buttons**********************
    var delbtn = document.createElement("button");

    var delbtnText = document.createTextNode("Delete");

    delbtn.appendChild(delbtnText);

    delbtn.setAttribute("onClick", "delTodo(this)")

    listElement.appendChild(delbtn);

     // ***************edit buttons**********************
     var editbtn = document.createElement("button");

     var editbtnText = document.createTextNode("Edit");
 
     editbtn.appendChild(editbtnText);
 
     listElement.appendChild(editbtn);

    list.appendChild(listElement);

    editbtn.setAttribute("onClick", "editTodo(this)")

    console.log(listElement);

    input.value = "";
}

function deletetodo() {
    var list = document.getElementById("list-item");
    list.remove();
    // list.innerHTML = "";
}

function delTodo(e) {
    console.log(e.parentNode.remove());
}

function editTodo (e) {
    var currentli =  e.parentNode.firstChild.nodeValue;
    var inputField = prompt("Enter updated Value", currentli);
    e.parentNode.firstChild.nodeValue = inputField;
}