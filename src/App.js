import React, { useState } from "react";
import { Card } from "react-bootstrap-v5";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // const editTodo = (index, newValue) => {
  //   const newTodos = [...todos];
  //   newTodos.map((todo) => {
  //     if (todo.id === index) {
  //       todo.text = newValue;
  //     }
  //     return todo.text;
  //   });
  //   setTodos(newTodos);
  // };

  return (
    <div className="app">
      <div className="container">
        <h2 className="text-center m-4">Todo List</h2>
        <TodoForm addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card key={index} className="mt-3">
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  // editTodo={editTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
