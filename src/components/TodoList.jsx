import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, toggleTodo } from '../store/TodoSlice';

const TodoList = () => {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-4">Todo List</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center">
            <span
              onClick={() => handleToggleTodo(todo.id)}
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleRemoveTodo(todo.id)}
              className="ml-2 text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
