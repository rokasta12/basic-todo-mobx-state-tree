import React, { useState } from 'react';
import { useStore } from '../store/models/RootStore';

interface Todo {
  id: string;
  title: string;
  status: 'pending' | 'done' | 'notStarted';
}

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(todo.title);
  const [showUpdatedNotification, setShowUpdatedNotification] = useState(false);
  const store = useStore();

  const handleUpdate = () => {
    store.editTodo(todo.id, editableTitle, todo.status);
    setIsEditing(false); // Exit edit mode after update
    setShowUpdatedNotification(true); // Show the "updated" notification
    setTimeout(() => setShowUpdatedNotification(false), 3000); // Hide notification after 3 seconds
  };

  const handleDelete = () => {
    store.deleteTodo(todo.id);
  };

  const handleCancel = () => {
    setEditableTitle(todo.title); // Revert any changes made
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      {showUpdatedNotification && (
        <div className="text-green-500 text-center mb-2">
          Updated successfully!
        </div>
      )}
      <div className="mb-2">
        {isEditing ? (
          <input
            type="text"
            value={editableTitle}
            onChange={(e) => setEditableTitle(e.target.value)}
            className="text-xl p-2 border border-gray-300 rounded"
          />
        ) : (
          <p className="text-xl">{todo.title}</p>
        )}
        <p
          className={`text-sm ${
            todo.status === 'done' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {todo.status}
        </p>
      </div>
      <div className="flex items-center justify-between">
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Update
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoCard;
