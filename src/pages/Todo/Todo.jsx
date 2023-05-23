import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddList from "../../components/AddList/AddList";
import TodoItem from "../../components/TodoItem/TodoItem";
import classes from "./Todo.module.css";

const Todo = () => {
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();

  const isAuthenticated = () => {
    if (!isAuth) {
      navigate("/");
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);

  return (
    <>
      <Container className={classes.todoApp} style={{ width: "700px" }}>
        <AddList />
        <TodoItem />
      </Container>
    </>
  );
};

export default Todo;
