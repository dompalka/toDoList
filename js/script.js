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

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
        <li${task.done ? ' style="text-decoration: line-through"' : ""}>
         ${task.content}<button class="js-remove">Remove</button>
        </li>
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  };

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const removeTask = (index) => {
    tasks.splice(index, 1);
    render();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newInput").value.trim();

    if (newTaskContent === "") return;

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
