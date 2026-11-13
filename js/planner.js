// An array that stores all the tasks
let tasks = [];

// Get the elements from the page
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// This function draws all the tasks on the page
function renderTasks() {
	list.innerHTML = "";

	tasks.forEach(function (task, index) {
		const li = document.createElement("li");
		li.textContent = task.text;

		if (task.done) {
			li.classList.add("done");
		}

		// Click a task to mark it done or not done
		li.addEventListener("click", function () {
			tasks[index].done = !tasks[index].done;
			renderTasks();
		});

		// Delete button
		const del = document.createElement("button");
		del.textContent = "Delete";
		del.addEventListener("click", function (e) {
			e.stopPropagation();
			tasks.splice(index, 1);
			renderTasks();
		});

		li.appendChild(del);
		list.appendChild(li);
	});
}

// This function adds a new task
function addTask() {
	const text = input.value.trim();

	if (text === "") {
		alert("Please enter a task.");
		return;
	}

	tasks.push({ text: text, done: false });
	input.value = "";
	renderTasks();
}

// Run addTask when the button is clicked
addBtn.addEventListener("click", addTask);

// Also add the task when Enter is pressed
input.addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		addTask();
	}
});
