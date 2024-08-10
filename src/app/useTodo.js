import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    addTodo,
    deleteTodo,
    todos,
  };
};
