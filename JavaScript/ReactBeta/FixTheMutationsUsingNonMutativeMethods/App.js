// To-do
// In this example, all of the event handlers in App.js use mutation. As a result, editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:

// import { useState } from 'react';
// import AddTodo from './AddTodo.js';
// import TaskList from './TaskList.js';

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: 'Buy milk', done: true },
//   { id: 1, title: 'Eat tacos', done: false },
//   { id: 2, title: 'Brew tea', done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(
//     initialTodos
//   );

//   function handleAddTodo(title) {
//     todos.push({
//       id: nextId++,
//       title: title,
//       done: false
//     });
//   }

//   function handleChangeTodo(nextTodo) {
//     const todo = todos.find(t =>
//       t.id === nextTodo.id
//     );
//     todo.title = nextTodo.title;
//     todo.done = nextTodo.done;
//   }

//   function handleDeleteTodo(todoId) {
//     const index = todos.findIndex(t =>
//       t.id === todoId
//     );
//     todos.splice(index, 1);
//   }

//   return (
//     <>
//       <AddTodo
//         onAddTodo={handleAddTodo}
//       />
//       <TaskList
//         todos={todos}
//         onChangeTodo={handleChangeTodo}
//         onDeleteTodo={handleDeleteTodo}
//       />
//     </>
//   );
// }

// My solution
import { useState } from "react";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    let nextTodo = {
      id: nextId++,
      title: title,
      done: false,
    };
    setTodos([...todos, nextTodo]);
  }

  function handleChangeTodo(nextTodo) {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === nextTodo.id) {
        return {
          ...todo,
          title: nextTodo.title,
          done: nextTodo.done,
        };
      } else {
        return todo;
      }
    });
    setTodos(updatedTodo);
  }

  function handleDeleteTodo(todoId) {
    const nextTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });
    setTodos(nextTodos);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
