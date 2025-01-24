import PropTypes from "prop-types";
import TrashIcon from "./TrashIcon";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mr-2 form-checkbox h-5 w-5 text-cyan-500 rounded focus:ring-cyan-500"
        />
        <span
          className={`${
            todo.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        className="text-sm font-medium text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        <TrashIcon />
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;
