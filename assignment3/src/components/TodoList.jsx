import React from 'react';

function TodoList({ todos, onDelete, onEdit, onUpdate, editingTodo, editedText, setEditedText,}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editingTodo && editingTodo.id === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => onUpdate()}>Save</button>
            </>
          ) : (
            <>
              {todo.text}
              <button onClick={() => onEdit(todo.id)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
