import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
    setEditedText(todoToEdit.text);
  };

  const handleUpdateTodo = () => {
    if (editingTodo && editedText.trim() !== '') {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingTodo.id ? { ...todo, text: editedText } : todo
        )
      );
      setEditingTodo(null);
      setEditedText('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
        onUpdate={handleUpdateTodo}
        editingTodo={editingTodo}
        editedText={editedText}
        setEditedText={setEditedText}
      />
    </div>
  );
}

export default App;
