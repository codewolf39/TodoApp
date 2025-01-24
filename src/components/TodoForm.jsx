import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const TodoForm = ({ addTodos }) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodos(input.trim());
      setInput("");
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <form className="mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ref={inputRef}
        />
        <button
          type="submit"
          className="mt-2 w-full bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
        >
          Add
        </button>
      </form>
    </div>
  );
};

TodoForm.propTypes = {
  addTodos: PropTypes.func.isRequired, // Validate that 'addTodos' is a required function
};

export default TodoForm;
