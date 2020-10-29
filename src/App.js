import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import "./css/main.css"
function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div >


  );
}

export default App;
