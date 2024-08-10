import { useRef } from "react";
import PropTypes from "prop-types";

export const TodoInput = ({ onAddTodo }) => {
  const inputRef = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      onAddTodo(inputRef.current.value);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label name="todo">Enter todo:</label>
      <input type="text" data-testid="todo-input" ref={inputRef} />
      <button data-testid="todo-submit" type="submit">
        Add
      </button>
    </form>
  );
};

TodoInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
