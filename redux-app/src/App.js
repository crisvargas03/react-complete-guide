import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchThunk,
  setFilter,
  setComplete,
  selectStatus,
  selectTodo,
} from "./features/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      onClick={() => dispatch(setComplete(todo))}
    >
      {todo.title}
    </li>
  );
};

const App = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(selectTodo);
  const status = useSelector(selectStatus);

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
    }
    const id = Math.random().toString();
    const todo = {
      title: value,
      completed: false,
      id,
    };
    dispatch({ type: "todo/add", payload: todo });
    setValue("");
  };

  if (status.loading === "loading") {
    return <p>Cargando...</p>;
  }

  if (status.loading === "rejected") {
    return <p>{status.error}</p>;
  }

  return (
    <div>
      <h1>Redux App</h1>
      <form onSubmit={submit}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button onClick={() => dispatch(setFilter("all"))}>Show all</button>
      <button onClick={() => dispatch(setFilter("complete"))}>Completed</button>
      <button onClick={() => dispatch(setFilter("incomplete"))}>
        Uncompleted
      </button>
      <button onClick={() => dispatch(fetchThunk())}>Fetch</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
