import React from "react";
import { useState } from "react";
import { Button,Form } from "react-bootstrap";



function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit} className="form"> 
    <Form.Group>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button  variant="primary m-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

export default TodoForm;
