// AddTodo.tsx
import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/models/RootStore';

interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = () => {
  const rootStore = useStore();
  const titleRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSelectElement>(null);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = useCallback(() => {
    if (titleRef.current?.value && statusRef.current?.value) {
      const newTodo = {
        title: titleRef.current.value,
        status: statusRef.current.value as 'pending' | 'done' | 'notStarted',
      };
      rootStore.addTodo(newTodo.title, newTodo.status);
      setShowForm(false); // Triggers exit animation
    }
  }, []);

  // The key change is here, ensuring that the show/hide logic allows for exit animation
  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ${
          showForm ? 'hidden' : ''
        }`}
      >
        Add New
      </button>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
          >
            <input
              ref={titleRef}
              type="text"
              placeholder="Todo Title"
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <select
              ref={statusRef}
              className="mb-4 p-2 border border-gray-300 rounded"
            >
              <option value="pending">Pending</option>
              <option value="done">Done</option>
              <option value="notStarted">Not Started</option>
            </select>
            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
              <button
                onClick={() => setShowForm(false)} // Correctly triggers exit animation
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddTodo;
