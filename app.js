var list = document.getElementById("list")


function addtodo() {
    var todo_item = document.getElementById("todo_items");

    // creating inp after clicking on addtask

    
    var inpu = document.createElement("input");
    var inputext = document.createTextNode(todo_item.value);

    // dlt button 
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText);
    delBtn.setAttribute("onclick","deleteitem(this)");

    //  edit button
    var editBtn = document.createElement("button");
    var eText = document.createTextNode("Edit");
    editBtn.appendChild(eText);
    editBtn.setAttribute("onclick","edititem(this)")

    inpu.appendChild(inputext);
    list.appendChild(inpu);
    inpu.appendChild(delBtn);
    inpu.appendChild(editBtn);
    
    todo_item.value=("");
    }

function deleteitem(e){
    e.parentNode.remove();
}

function deleteall(){
    list.innerHTML = ""
}

function edititem(e){

}