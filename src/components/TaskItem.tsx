import React from "react";
import { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onComplete: (taskId: number) => void;
  onRemove: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onComplete, onRemove }) => (
  <div
    className={`p-4 bg-white shadow-md rounded-lg mb-4 flex justify-between items-center transition-all duration-300 ease-in-out ${
      task.completed ? "line-through bg-green-100" : "hover:bg-gray-100"
    }`}
  >
    <div className="flex flex-col">
      <span className="text-lg font-semibold">{task.title}</span>
      <div className="text-sm text-gray-500">{task.category}</div>
    </div>
    <div className="flex space-x-2">
      {!task.completed && (
        <button
          onClick={() => onComplete(task.id)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-all duration-300 ease-in-out shadow"
        >
          Complete
        </button>
      )}
      <button
        onClick={() => onRemove(task.id)}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-all duration-300 ease-in-out shadow"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TaskItem;
