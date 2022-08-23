var list = document.getElementById("list")


function addtodo() {
    var todo_item = document.getElementById("todo_items");

    // creating inp after clicking on addtask

    
    var li = document.createElement("li");
    var litext = document.createTextNode(todo_items.value);

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

    li.appendChild(litext);
    list.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(editBtn);
    
    todo_item.value=("");
    }

function deleteitem(e){
    e.parentNode.remove();
}

function deleteall(){
    list.innerHTML = ""
}

function edititem(e){

    var newval = prompt ("edit",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = newval
    console.log(e.parentNode.firstChild.nodeValue)

}