import styles from "./modulestyle.module.css";
import { BsSearch } from "react-icons/bs";
import {
  Card,
  Row,
  Col,
  InputGroup,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function SearchComp({ onSearch }) {
  const [searchToDo, setSearchToDo] = useState("");

  const handleSearch = () => {
    onSearch(searchToDo);
    setSearchToDo("");
  };

  return (
    <>
      <Container className="justify-content-center align-items-start">
        <div className="text-center">
          <h2>Todo Search</h2>
        </div>
        <Card className="my-3">
          <Card.Body>
            <Row className="d-flex flex-row justify-content-md-start align-items-center">
              <Col xs="12" md="12" lg="7">
                <InputGroup className="mb-1">
                  <Button
                    className={styles["btn-search-icon"]}
                    onClick={handleSearch}
                  >
                    {<BsSearch />}
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Search Todo"
                    value={searchToDo}
                    onChange={(e) => setSearchToDo(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col xs="6" md="6" lg="7" className="mt-2">
                <Button className={styles.btn} onClick={handleSearch}>
                  Search
                </Button>
              </Col>
              <Col xs="6" md="6" lg="5" className="mt-2">
                <Link to="/add-todo">
                  <Button className={styles.btn}>Add new Task</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

SearchComp.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchComp;
