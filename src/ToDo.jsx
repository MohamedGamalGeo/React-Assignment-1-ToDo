import React, { useState } from 'react';

function ToDo() {
    const [tasks, setTasks] = useState([]); // Stores tasks as objects with name and description
    const [newTask, setNewTask] = useState("");
    const [newTaskDescription, setNewTaskDescription] = useState("");

    // Handles the task input
    function handleTaskChange(event) {
        setNewTask(event.target.value);
    }

    // Handles the description input
    function handleTaskDescriptionChange(event) {
        setNewTaskDescription(event.target.value);
    }

    // Adds a new task with its description
    function addTask() {
        if (newTask.trim() !== "" && newTaskDescription.trim() !== "") {
            setTasks([...tasks, { name: newTask, description: newTaskDescription }]);
            setNewTask("");
            setNewTaskDescription("");
        }
    }

    // Deletes a task
    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    return (
        <div>
            <input 
                type="text" 
                value={newTask} 
                onChange={handleTaskChange} 
                placeholder="Enter a task" 
            />
            <input 
                type="text" 
                value={newTaskDescription} 
                onChange={handleTaskDescriptionChange} 
                placeholder="Enter a task description" 
            />
            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>
                            <strong>Task:</strong> {task.name}   <strong>Description:</strong> {task.description} <a href='onClick={() => deleteTask(index)}' >Done </a> <br />
                          
                        </span>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;
