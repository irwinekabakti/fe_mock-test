import React, { Fragment, useState } from "react";
import {
  Container,
  Button,
  Form,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isLogin } from "../../store/action/auth-slice";
import classes from "./Login.module.css";

const Login = () => {
  const [number, setNumber] = useState("");
  const [username, setUser] = useState("");
  const [show, setShow] = useState(false);
  const [errorShow, setErrorShow] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerId = (e) => {
    setNumber(e.target.value);
  };

  const handlerUser = (e) => {
    setUser(e.target.value);
  };

  const dec2hex = (dec) => {
    return dec.toString(16).padStart(2, "0");
  };

  const generateId = (len) => {
    const arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec2hex).join("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (number.length >= 4 && username.length !== 0) {
      localStorage.setItem("token", `${generateId()}`);
      localStorage.setItem("username", `${username}`);
      dispatch(isLogin(true));
      setShow(true);
      setTimeout(() => {
        navigate("/todo");
      }, 2500);
    } else {
      setErrorShow(true);
    }
  };

  return (
    <Fragment>
      {show ? (
        <ToastContainer position="top-center">
          <Toast
            onClose={() => setShow(false)}
            bg="primary"
            show={show}
            delay={3000}
            autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto text-dark">Notification</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body className="fw-bold text-white">
              Login successful !
            </Toast.Body>
          </Toast>
        </ToastContainer>
      ) : null}
      {errorShow ? (
        <ToastContainer position="top-center">
          <Toast
            onClose={() => setErrorShow(false)}
            bg="warning"
            show={errorShow}
            delay={3000}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto text-dark">Warning !</strong>
              <small>now</small>
            </Toast.Header>
            <Toast.Body className="fw-bold text-dark">
              Please input minimum 4 ID !
            </Toast.Body>
          </Toast>
        </ToastContainer>
      ) : null}
      <Container className={classes.loginApp} style={{ width: "600px" }}>
        <h3>Login dulu bang</h3>
        <div className="d-flex justify-content-center">
          <Form
            style={{ width: "400px", marginTop: "30px" }}
            onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label className="d-flex justify-content-start">
                Name
              </Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Penaldo"
                onChange={handlerUser}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicId">
              <Form.Label className="d-flex justify-content-start">
                ID
              </Form.Label>
              <Form.Control
                type="number"
                required
                placeholder="666666"
                onChange={handlerId}
              />
            </Form.Group>
            <Button
              variant="primary"
              style={{ width: "100%" }}
              className="fw-bold"
              type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Login;
