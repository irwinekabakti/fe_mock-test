import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddList from "../../components/AddList/AddList";
import TodoItem from "../../components/TodoItem/TodoItem";
import { removeTodo } from "../../store/action/todo-slice";
import classes from "./Todo.module.css";

const Todo = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const [show, setShow] = useState(false);
  const [deleteTodo, setDeleteTodo] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    dispatch(removeTodo(deleteTodo));
    setShow(false);
  };

  const isAuthenticated = () => {
    if (!isAuth) {
      navigate("/");
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <Fragment>
      <Container className={classes.todoApp} style={{ width: "700px" }}>
        <Modal show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Remove todo?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you really want to delete it?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRemove}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
        <AddList />
      </Container>
    </Fragment>
  );
};

export default Todo;
