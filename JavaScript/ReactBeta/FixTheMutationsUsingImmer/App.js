// To-do
// This is the same example as in the previous challenge. This time, fix the mutations by using Immer. For your convenience, useImmer is already imported, so you need to change the todos state variable to use it.

// import { useState } from "react";
// import { useImmer } from "use-immer";
// import AddTodo from "./AddTodo.js";
// import TaskList from "./TaskList.js";

// let nextId = 3;
// const initialTodos = [
//   { id: 0, title: "Buy milk", done: true },
//   { id: 1, title: "Eat tacos", done: false },
//   { id: 2, title: "Brew tea", done: false },
// ];

// export default function TaskApp() {
//   const [todos, setTodos] = useState(initialTodos);

//   function handleAddTodo(title) {
//     todos.push({
//       id: nextId++,
//       title: title,
//       done: false,
//     });
//   }

//   function handleChangeTodo(nextTodo) {
//     const todo = todos.find((t) => t.id === nextTodo.id);
//     todo.title = nextTodo.title;
//     todo.done = nextTodo.done;
//   }

//   function handleDeleteTodo(todoId) {
//     const index = todos.findIndex((t) => t.id === todoId);
//     todos.splice(index, 1);
//   }

//   return (
//     <>
//       <AddTodo onAddTodo={handleAddTodo} />
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
import { useImmer } from "use-immer";
import AddTodo from "./AddTodo.js";
import TaskList from "./TaskList.js";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, updateTodos] = useImmer(initialTodos);

  function handleAddTodo(title) {
    updateTodos((draft) => {
      draft.push({
        id: nextId++,
        title: title,
        done: false,
      });
    });
  }

  function handleChangeTodo(nextTodo) {
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id);
      todo.title = nextTodo.title;
      todo.done = nextTodo.done;
    });
  }

  function handleDeleteTodo(todoId) {
    updateTodos((draft) => {
      const index = draft.findIndex((t) => t.id === todoId);
      draft.splice(index, 1);
    });
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

// The key difference with immer is that it doesn't pass todos into the update function, but passes a draft which is a copy of todos, and use the updated state of draft to update todos for you behind the scenes in a non-mutative way
