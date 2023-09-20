// import { useState } from "react";
import toDoListJSON from "../data/toDoList.json";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { BsTrash3Fill, BsPencilFill } from "react-icons/bs";
import { FormCheck } from "react-bootstrap";
// import { TiDeleteOutline } from "react-icons";

function ToDoListComp() {
  return (
    <>
      <ListGroup as="li" className="">
        {toDoListJSON.map((todo) => (
          <>
            <Row className="border m-2">
              <Col xs="6" md="6" lg="6">
                <div className="todolist">
                  <p key={todo.id} className="mt-3">
                    {todo.task}
                  </p>
                </div>
              </Col>
              <Col
                xs="6"
                md="6"
                lg="6"
                className="d-flex flex-row justify-content-end align-items-center"
              >
                <FormCheck checked={todo.complete}></FormCheck>
                <Button variant="outline" className="border-0">
                  <BsPencilFill color="orange" />
                </Button>
                <Button variant="outline" className="border-0">
                  <BsTrash3Fill color="red" />
                </Button>
              </Col>
            </Row>
          </>
        ))}
      </ListGroup>
    </>
  );
}

export default ToDoListComp;
