let inputele = document.getElementById("input");
let btn = document.getElementById("btn");
let ordered = document.getElementById("ordered");
let error = document.getElementById("error");
let update=document.getElementById("update");
update.classList.add("updateed");
let todo_list = [];
let serialcount = 0;
var update_item_id

function updatentm(){
    let up_date=document.getElementById(update_item_id);
    up_date.innerHTML=inputele.value;
    // console.log(up_date);
    inputele.value="";
    btn.classList.add("added2");
    update.classList.add("updateed2");
}
function addbtn() {
    error.innerHTML = "";
    let inputvalue = inputele.value;
    if (inputvalue != "") {
        serialcount += 1;
        let list = {
            name: inputvalue,
            num: serialcount
        };
        todo_list.push(list);
        displyItems(list);
    } else {
        error.textContent = "*Required";
        error.style.color = "red";
    }
}

function delte_item(list_id) {
    let item_id = document.getElementById(list_id);
    ordered.removeChild(item_id);
}

function edit_item(list_id,span_id) {
    let edit_ele = document.getElementById(list_id);
    let span_ele=document.getElementById(span_id);
    inputele.value=span_ele.innerHTML;
    update_item_id=span_id;
    update.classList.add("updateed2");
    btn.classList.add("added");
}

function displyItems(list) {
    let li = document.createElement("li");
    let list_id = "id_no." + list.num;
    li.id = list_id;
    ordered.appendChild(li);

    let divcon=document.createElement("div");
    divcon.classList.add("count");
    li.appendChild(divcon);

    let span = document.createElement("span");
    let span_id="span_id"+list.num;
    span.id=span_id;
    span.innerHTML = list.name;
    divcon.appendChild(span);

    let div = document.createElement("div");
    divcon.appendChild(div);
    let edit = document.createElement("button");
    edit.addEventListener("click", function () {
        edit_item(list_id,span_id);
    })

    let del = document.createElement("button");
    del.addEventListener("click", function () {
        delte_item(list_id);
    })
    div.append(edit, del);

    edit.innerHTML = "edit";
    del.innerHTML = "delete";
    edit.id = "editing";
    del.id = "delting";
    inputele.value = "";

}