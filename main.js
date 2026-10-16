
/**
 * Exercise 2: Reactive Task Manager
 * Step 4: Assemble the application
 */

const root = document.querySelector(".task-manager");
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");

let setTasks;
let setFilter;

function createTask(text) {
  return {
    id: crypto.randomUUID(),
    text,
    completed: false
  };
}

function renderTasks() {
  resetCursor();

  const [tasks, updateTasks] = useState([]);
    const [filter, updateFilter] = useState("all");

    setTasks = updateTasks;
    setFilter = updateFilter;

  const visibleTasks = tasks.filter(task => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  taskList.replaceChildren();

  visibleTasks.forEach(task => {
    const item = document.createElement("li");
    item.className = task.completed
      ? "task-item is-completed"
      : "task-item";

    const text = document.createElement("span");
    text.textContent = task.text;

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.dataset.action = "toggle";
    toggleButton.dataset.id = task.id;
    toggleButton.textContent = task.completed ? "Undo" : "Complete";

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.dataset.action = "delete";
    deleteButton.dataset.id = task.id;
    deleteButton.textContent = "Delete";

    item.append(text, toggleButton, deleteButton);
    taskList.append(item);
  });

  taskCount.textContent =
    `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;

  emptyMessage.hidden = visibleTasks.length > 0;

  document.querySelectorAll("[data-filter]").forEach(button => {
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.filter === filter)
    );
  });
}

function handleRootEvent({ action, id, event }) {
  if (action === "filter") {
    const selectedFilter = event.target.closest("[data-filter]");

    if (!selectedFilter) {
      return;
    }

    setFilter(selectedFilter.dataset.filter);
  }

  if (action === "toggle") {
    setTasks(previousTasks =>
      previousTasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  if (action === "delete") {
    setTasks(previousTasks =>
      previousTasks.filter(task => task.id !== id)
    );
  }
}

taskForm.addEventListener("submit", event => {
  event.preventDefault();

  const text = taskInput.value.trim();

  if (!text) {
    return;
  }

  setTasks(previousTasks => [
    ...previousTasks,
    createTask(text)
  ]);

  taskInput.value = "";
  taskInput.focus();
});

attachRootEventDelegation(root, handleRootEvent);

setRerender(renderTasks);
renderTasks();
