import React, { useState } from "react";

interface AddTaskFormProps {
  onAddTask: (title: string, category: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim() && category.trim()) {
      onAddTask(taskTitle, category);
      setTaskTitle("");
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-2">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="New task"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Category"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 ease-in-out shadow-sm"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
