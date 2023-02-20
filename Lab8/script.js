let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("dne")) {
    e.target.parentElement.parentElement.childNodes[0].classList.toggle("done"); 
    toggleStatusTaskWith(e.target.parentElement.parentElement.getAttribute("data-id"))
    // console.log(e.target.parentElement.parentElement.childNodes[0].getAttribute("data-id"))
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };

  
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
  // console.log(task);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    let spn = document.createElement("span");
    spn.className = "main";
    // Check If Task is Done
    if (task.completed) {
     spn.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    spn.appendChild(document.createTextNode(task.title));
    div.appendChild(spn);
    // Create Delete & Done  Buttons
    let divv = document.createElement("div");
    divv.className = "btns";
    let span = document.createElement("span");
    span.className = "del";
    let spann = document.createElement("span");
    spann.className = "dne";
    span.appendChild(document.createTextNode("X"));
    spann.appendChild(document.createTextNode("✔️"));
    // Append Buttons To  Div
    divv.appendChild(spann);
    divv.appendChild(span);
   
    div.appendChild(divv); // Add Button Div To Task Div
    tasksDiv.appendChild(div);// Add Task Div To Tasks Container
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {

  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
  // console.log(arrayOfTasks);
}