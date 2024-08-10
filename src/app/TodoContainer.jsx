import { useMemo, useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoFilterInput } from "./TodoFilterInput";
import { TodoList } from "./TodoList";
import { useTodo } from "./useTodo";

const filterTodos = (todoFilter, todos) =>
  todoFilter ? todos.filter((todo) => todo.title.includes(todoFilter)) : todos;

export const TodoContainer = () => {
  const { addTodo, deleteTodo, todos } = useTodo();
  const [todoFilter, setTodoFilter] = useState("");

  const onAddTodo = (title) => {
    addTodo(title);
  };

  const onDeleteTodo = (todoId) => {
    deleteTodo(todoId);
  };

  const onFilterTodo = (todoFilter) => {
    setTodoFilter(todoFilter);
  };

  const filteredTodos = useMemo(
    () => filterTodos(todoFilter, todos),
    [todoFilter, todos]
  );

  return (
    <div>
      <TodoFilterInput todoFilter={todoFilter} onFilterTodo={onFilterTodo} />
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList todos={filteredTodos} onDeleteTodo={onDeleteTodo} />
    </div>
  );
};

export default TodoContainer;
