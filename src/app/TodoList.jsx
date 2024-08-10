import PropTypes from "prop-types";

export const TodoList = ({ todos, onDeleteTodo }) => (
  <ul data-testid="todo-list">
    {todos.map((todo) => (
      <li key={todo.id}>
        <span>{todo.title}</span>
        <button data-testid="todo-delete" onClick={() => onDeleteTodo(todo.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
