import React, { useEffect } from "react";
import { Button, Container, Modal, Table, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { dataTodoAPI } from "../../store/action/todo-slice";
import { FaCheck, FaTimes, FaUndo } from "react-icons/fa";

const TodoItem = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);
  console.log("result", todoList);

  useEffect(() => {
    dispatch(dataTodoAPI());
  }, []);

  return (
    <>
      <Container style={{ width: "620px", marginBottom: "50px" }}>
        <h3 className="title">Todo List</h3>
        <Table
          striped
          hover
          bordered
          style={{ textAlign: "center", verticalAlign: "middle" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoList?.map((item) => (
              <tr key={item.id}>
                <td className="col-lg-6">
                  <p className={`todo-item ${item.completed ? "done" : ""}`}>
                    {item.title}
                  </p>
                </td>
                <td className="col-lg-4">
                  <Badge pill bg={item.completed ? "success" : "danger"}>
                    {item.completed ? "Done" : "Pending"}
                  </Badge>
                </td>
                <td className="col-lg-1">
                  {item.completed ? (
                    <div className="text-secondary iconAction">
                      <FaUndo />
                    </div>
                  ) : (
                    <div className="text-success iconAction">
                      <FaCheck />
                    </div>
                  )}
                </td>
                <td className="col-lg-1">
                  <div className="text-danger iconClose">
                    <FaTimes />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default TodoItem;
