const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const inputBox2 = document.getElementById("input-box2");
const inputBox3 = document.getElementById("input-box3");
const prior = document.getElementById("priority");
function addTask() {
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else if(inputBox2.value === ''){
        alert("Please Add a Deadline");
    }
    else if(inputBox3.value === ''){
        alert("Add Label to make it ease");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `<p style = "font-size: 20px,font-weight: 300">${inputBox.value}</p><p style = "font-size: 13px; font-weight: 10">Priotity: ${prior.value}</p><p style = "font-size: 13px; font-weight: 10"> Deadline: ${inputBox2.value}</p><p style ="font-size: 13px; font-weight: 10">Label: ${inputBox3.value}</p>`
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        inputBox2.value = "";
        inputBox3.value = "";
    }    
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
