import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';
import TodosFilter from './TodosFilter';

function TodoFooter({ todosLength, filter }) {
  const { removeCompletedTodos, filterChange } = useContext(Context);

  // eslint-disable-next-line no-console
  console.log(filter);

  return (
    <footer className="footer">
      <span className="todo-count">
        {`${todosLength} items left`}
      </span>

      <TodosFilter filterChange={() => filterChange} filter={filter} />

      <button
        type="button"
        className="clear-completed"
        onClick={() => removeCompletedTodos()}
      >
        Clear completed
      </button>
    </footer>
  );
}

TodoFooter.propTypes = {
  todosLength: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodoFooter;
