import { useRef } from "react";

function TasksSection({ projectId, tasks, taskHandler }) {
  console.log(tasks);
  const taskRef = useRef();
  const { onAdd, onDelete } = taskHandler;
  function handleAddTask() {
    const newContent = taskRef.current.value.trim();
    if (newContent === "") {
      window.alert("Please enter Task contents");
      return;
    }
    const newTask = {
      id: crypto.randomUUID(),
      content: newContent,
    };
    onAdd(projectId, newTask);
    taskRef.current.value = "";
  }

  function handleDeleteTask(taskId) {
    onDelete(projectId, taskId);
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          ref={taskRef}
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          onClick={handleAddTask}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This is project does not have any tasks yet.
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <p className="text-stone-800">{task.content}</p>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TasksSection;
