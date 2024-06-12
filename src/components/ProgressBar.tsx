import React from "react";

interface ProgressBarProps {
  points: number;
  pointsPerLevel: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  points,
  pointsPerLevel,
}) => {
  const progress = (points / pointsPerLevel) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
      <div
        className="bg-blue-500 h-4 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
