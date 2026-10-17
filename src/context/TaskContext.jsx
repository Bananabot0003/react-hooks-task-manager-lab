
import React, {
  createContext,
  useState,
  useEffect,
} from "react";

export const TaskContext = createContext();

const API_URL = "http://localhost:6001/tasks";

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Load tasks from the backend
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, []);

  // Add a new task
  function addTask(title) {
    const newTask = {
      title: title,
      completed: false,
      userId: 1,
    };

    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((response) => response.json())
      .then((createdTask) => {
        setTasks((currentTasks) => [
          ...currentTasks,
          createdTask,
        ]);
      })
      .catch((error) => console.error(error));
  }

  // Mark a task complete or incomplete
  function toggleComplete(id) {
    const task = tasks.find((item) => item.id === id);

    if (!task) return;

    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    })
      .then((response) => response.json())
      .then((updatedTask) => {
        setTasks((currentTasks) =>
          currentTasks.map((item) =>
            item.id === id ? updatedTask : item
          )
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
}
