import React from 'react';

interface TaskProps {
  task: string;
  onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onDelete }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded mb-2 bg-gray-400">
      <p>{task}</p>
      <button onClick={onDelete} className="text-red-600">
        Delete
      </button>
    </div>
  );
};

export default Task;
