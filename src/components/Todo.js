import { Button } from "react-bootstrap-v5";

function Todo({ todo, index, markTodo, removeTodo, editTodo, newValue }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>
        {todo.text}
      </span>
      <div className="btn">
        <Button variant="outline-success" onClick={() => markTodo(index)}>
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(index)}>
          ✕
        </Button>
        {/* <Button variant="outline-danger" onClick={() => editTodo(index, newValue)}>
          Edit
        </Button> */}
      </div>
    </div>
  );
}
export default Todo;
