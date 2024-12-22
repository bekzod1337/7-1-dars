import React from 'react';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center">
      <TodoList />
    </div>
  );
};

export default App;
