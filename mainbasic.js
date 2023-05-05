// Todo Array
const todo = [
  "Clean Bathroom",
  "Change Bed Sheets",
  "Dust Bedroom",
  "Fold Laundry",
  "Take out Garbage",
  "Clean Dishes",
  "Empty Laundry",
  "Mow Lawn",
  "Fill Laundry",
  "Put away Laundry",
];

// Return random index from todo array
var items = todo[Math.floor(Math.random() * todo.length)];

function createDiv() {
  const taskDiv = document.createElement("div");
  taskDiv.className = "task-container";
  taskDiv.textContent = todo[Math.floor(Math.random() * todo.length)];
  document.getElementById("tasks").appendChild(taskDiv);
}


function incrementCounter() {
  const counterElem = document.querySelector("#counter"),
    count = +counterElem.innerText;
  counterElem.innerText = count + 1;
}

function removeTask() {
  const div = document.querySelector(".task-container");
  if (div) {
    document.getElementById("tasks").removeChild(div);
  }
}

function reduceCounter() {
  const counterElem = document.querySelector("#counter");
  const count = +counterElem.innerText;
  if (count > 0) {
    counterElem.innerText = count - 1;
  }
}

