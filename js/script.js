{
  const tasks = [
    {
      content: "task 1",
      done: false,
    },
    {
      content: "task 2",
      done: true,
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li class="taskList__item${task.done ? " taskList__item--done" : ""}">
        <button class="js-done taskList__complete"></button>${task.content}
         <button class="js-remove">&#128465</button>
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const clearInput = () => {
    document.querySelector(".js-newInput").focus();
    document.querySelector(".js-newInput").value = null;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newInput").value.trim();

    if (newTaskContent === "") return;

    addNewTask(newTaskContent);

    clearInput();
  };

  const textFocus = () => {
    const inputButton = document.querySelector(".js-button");
    const taskContent = document.querySelector(".js-newInput");

    inputButton.addEventListener("click", () => {
      taskContent.focus();
    });
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);

    textFocus();
  };

  init();
}
