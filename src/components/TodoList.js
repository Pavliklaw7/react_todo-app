import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, onToggle, filter, toggleAll }) {
  return (
    <section className="main">
      <input type="checkbox" id="toggle-all" className="toggle-all" />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onChange={onToggle}
            filter={filter}
            toggleAll={toggleAll}
          />
        ))}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  toggleAll: PropTypes.bool.isRequired,
};

export default TodoList;
