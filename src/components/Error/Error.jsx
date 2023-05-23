import React from "react";
import { useNavigate } from "react-router-dom";
import { Alert, Button, Container } from "react-bootstrap";
import { FaArrowCircleLeft } from "react-icons/fa";
import classes from "./Error.module.css";

const Error = () => {
  const navigate = useNavigate();

  const backToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Container className={classes.errorApp} style={{ width: "700px" }}>
        <Alert variant="danger" style={{ margin: "auto 0" }}>
          <Alert.Heading>Ups sorry! Page not found !</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
        <div className="mt-3">
          <Button
            variant="outline-primary"
            className="fw-bold"
            onClick={backToHome}>
            <FaArrowCircleLeft className="me-2" />
            Back to home
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Error;
