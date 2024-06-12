import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

interface TaskListProps {
  tasks: Task[];
  onTaskComplete: (taskId: number) => void;
  onTaskRemove: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskComplete,
  onTaskRemove,
}) => (
  <div className="space-y-4">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onComplete={onTaskComplete}
        onRemove={onTaskRemove}
      />
    ))}
  </div>
);

export default TaskList;
