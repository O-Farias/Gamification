import React from "react";

interface LevelIndicatorProps {
  level: number;
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({ level }) => (
  <div className="text-2xl font-bold mb-4 text-center">
    Level: <span className="text-blue-600">{level}</span>
  </div>
);

export default LevelIndicator;
