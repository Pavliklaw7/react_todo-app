import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

function TodoItem({ todo, onChange, filter, toggleAll }) {
  const { removeTodo } = useContext(Context);
  const [completed, setCompleted] = useState(todo.completed);
  const classes = [];

  useEffect(() => {
    setCompleted(toggleAll);
  }, [toggleAll]);

  if (todo.completed) {
    classes.push('completed');
  }

  function showTodo() {
    switch (filter) {
      case 'Completed':
        return !completed;
      case 'Active':
        return completed;
      default:
        return false;
    }
  }

  return (
    <li
      className={classes.join('')}
      hidden={showTodo()}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <label>{todo.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
      <input type="text" className="edit" />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  toggleAll: PropTypes.bool.isRequired,
};

export default TodoItem;
