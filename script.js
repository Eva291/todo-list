const inputField = document.getElementById("task-input");
const toDoList = document.getElementById("todo-list");

const removeTask = async (event) => {
  const target = event.target;
  const li = target.parentNode.parentNode;
  const id = li.id;
  await removeTaskApi(id);
  toDoList.innerHTML = "";
  inputField.value = "";
  createToDoList();
};

const createToDoList = async function () {
  const toDos = await getTasksApi();
  toDos.map((toDo) => {
    const newLi = document.createElement("li");
    const newDiv = document.createElement("div");
    const description = document.createTextNode(toDo.description);
    const id = toDo._id;
    const trashcan = document.createElement("img");
    newLi.id = id;
    newLi.classList.add("toDoItem");
    newDiv.classList.add("toDoDiv");
    trashcan.classList.add("trashImg");
    trashcan.src = "trashcan.png";
    trashcan.addEventListener("click", removeTask);
    newDiv.appendChild(description);
    newDiv.appendChild(trashcan);
    newLi.appendChild(newDiv);
    toDoList.appendChild(newLi);
  });
};

createToDoList();

const postTask = async (event) => {
  const value = event.target.value;
  const newItem = {
    description: value,
    done: false,
  };
  await postTaskApi(newItem);
  toDoList.innerHTML = "";
  inputField.value = "";
  createList();
};

inputField.addEventListener("change", postTask);
