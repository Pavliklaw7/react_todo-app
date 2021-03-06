import React from 'react';
import PropTypes from 'prop-types';

function TodosFilter({ filterChange, filter }) {
  return (
    <>
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={filter === 'All' ? 'selected' : ''}
            name="All"
            onClick={filterChange}
          >
            All
          </a>
        </li>

        <li>
          <a
            href="#/active"
            className={filter === 'Active' ? 'selected' : ''}
            name="Active"
            onClick={filterChange}
          >
            Active
          </a>
        </li>

        <li>
          <a
            href="#/completed"
            className={filter === 'Completed' ? 'selected' : ''}
            name="Completed"
            onClick={filterChange}
          >
            Completed
          </a>
        </li>
      </ul>
    </>
  );
}

TodosFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodosFilter;
