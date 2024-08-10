import PropTypes from "prop-types";

export const TodoFilterInput = ({ onFilterTodo, todoFilter }) => (
  <>
    <span>Filter todo:</span>
    <input
      data-testid="todo-filter"
      type="text"
      value={todoFilter}
      onChange={(e) => onFilterTodo(e.target.value)}
    />
  </>
);

TodoFilterInput.propTypes = {
  onFilterTodo: PropTypes.func.isRequired,
  todoFilter: PropTypes.string.isRequired,
};
