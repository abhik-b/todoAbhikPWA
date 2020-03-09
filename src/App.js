import React, { lazy, Suspense } from "react";
import AddTodo from "./components/addTodo";
import Navbar from "./components/navbar";
const TodoList = lazy(() => import("./components/todoList"));
function App() {
  return (
    <div className="App">
      <Navbar />
      <AddTodo />
      <Suspense fallback={<h2>loadin...</h2>}>
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;
