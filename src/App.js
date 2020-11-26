/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useCallback } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import Context from './context';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [toggleAll, setToggleAll] = useState(false);

  function fillterChange(event) {
    setFilter(event.target.name);
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false,
    }]));
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const removeCompletedTodos = useCallback(() => {
    setTodos(todos.filter(todo => todo.completed === false));
    setToggleAll(false);
  }, [todos]);

  function toggleTodo(id) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  }

  return (
    <Context.Provider
      value={{
        removeTodo,
        removeCompletedTodos,
        fillterChange,
      }}
    >
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <AddTodo onCreate={addTodo} />
        </header>

        <section className="main">
          <input
            type="checkbox"
            id="toggle-all"
            className="toggle-all"
            onChange={() => {
              setToggleAll(!toggleAll);
            }}
          />
          <label>
            Mark all as complete
          </label>
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            filter={filter}
            toggleAll={toggleAll}
          />
        </section>
        {todos.length ? (
          <TodoFooter todosLength={todos.length} filter={filter} />
        ) : null}
      </section>
    </Context.Provider>
  );
}

export default App;
