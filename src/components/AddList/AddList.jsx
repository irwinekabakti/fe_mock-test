import { useState } from "react";
import {
  Button,
  Form,
  Container,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import classes from "./AddList.module.css";
import { addTodo } from "../../store/action/todo-slice";
import { isLogout } from "../../store/action/auth-slice";

const AddList = () => {
  const [todo, setTodo] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getUsername = localStorage.getItem("username");

  const handleLogout = () => {
    setShow(true);
    setTimeout(() => {
      dispatch(isLogout(false));
      navigate("/");
    }, 2500);
  };

  return (
    <Container>
      {show ? (
        <ToastContainer position="top-center">
          <Toast
            onClose={() => setShow(false)}
            bg="danger"
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
              Logout successful !
            </Toast.Body>
          </Toast>
        </ToastContainer>
      ) : null}

      <div className={`d-flex justify-content-evenly`}>
        <div className="d-flex mt-1">
          <FaUserCircle className="mt-1 " style={{ color: "#198754" }} />
          <h5 className="userName ms-2">{getUsername}</h5>
        </div>
        <Button
          className="todoLogout fw-bold"
          variant="outline-danger"
          onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <hr className="mt-4" />
      <Form className="mb-4 mt-4" style={{ margin: "0 auto" }}>
        <div className="d-flex justify-content-center">
          <Form.Group style={{ width: "500px" }}>
            <Form.Control
              required
              placeholder="Todo List"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="ms-2">
            <Button
              variant="outline-success"
              className={`${classes.btnSubmit} fw-bold`}
              type="submit">
              Add
            </Button>
          </Form.Group>
        </div>
      </Form>
    </Container>
  );
};

export default AddList;
