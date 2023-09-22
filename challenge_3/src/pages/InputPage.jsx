import styles from "../components/modulestyle.module.css";
import {
  Container,
  Card,
  InputGroup,
  Form,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function InputPage({ onAddTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    onAddTodo(newTodo);
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <div className="text-center">
        <h2>Todo Input</h2>
      </div>
      <Card>
        <Card.Body>
          <Row>
            <Col className="d-flex justify-content-end align-items-center">
              <Link to="/">
                <Button variant="outline" size="md" className="border-0">
                  ❌
                </Button>
              </Link>
            </Col>
          </Row>
          <InputGroup className="p-4">
            <InputGroup.Text id="basic-addon1">📃</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter your new todo"
              value={newTodo}
              formMethod="POST"
              onSubmit={handleSubmit}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <Button
              variant="primary"
              type="submit"
              className={`mt-3 ${styles.btn}`}
            >
              Submit
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

InputPage.propTypes = {
  onAddTodo: PropTypes.func,
};

export default InputPage;
