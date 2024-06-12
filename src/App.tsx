import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import ProgressBar from "./components/ProgressBar";
import LevelIndicator from "./components/LevelIndicator";
import AddTaskForm from "./components/AddTaskForm";
import { Task } from "./types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
const initialPoints = Number(localStorage.getItem("points")) || 0;
const initialLevel = Number(localStorage.getItem("level")) || 1;

const rewards = [
  { level: 5, message: "You've unlocked a new badge!" },
  { level: 10, message: "You've unlocked a new theme!" },
];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [points, setPoints] = useState<number>(initialPoints);
  const [level, setLevel] = useState<number>(initialLevel);
  const pointsPerLevel = 100;

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("points", points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem("level", level.toString());
  }, [level]);

  useEffect(() => {
    if (points >= pointsPerLevel) {
      setLevel(level + 1);
      setPoints(points - pointsPerLevel);
      toast.success(`You have reached level ${level + 1}!`);
      const reward = rewards.find((r) => r.level === level + 1);
      if (reward) {
        toast.info(reward.message);
      }
    }
  }, [points, level]);

  const handleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
    setPoints(points + 10);
    toast.info("Task completed!");
  };

  const handleAddTask = (title: string, category: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      category,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    toast.success("New task added!");
  };

  const handleTaskRemove = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    toast.warn("Task removed");
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Task Management
      </h1>
      <LevelIndicator level={level} />
      <ProgressBar points={points} pointsPerLevel={pointsPerLevel} />
      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onTaskComplete={handleTaskCompletion}
        onTaskRemove={handleTaskRemove}
      />
      <ToastContainer />
    </div>
  );
};

export default App;
