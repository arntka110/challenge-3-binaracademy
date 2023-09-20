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

function SearchComp() {
  return (
    <>
      <Container className="justify-content-center align-items-start">
        <Card className="my-3">
          <Card.Body>
            <Row className="d-flex flex-row justify-content-md-start align-items-center">
              <Col xs="12" md="12" lg="7">
                <InputGroup className="mb-1">
                  <Button className={styles["btn-search-icon"]}>
                    {<BsSearch />}
                  </Button>
                  <Form.Control placeholder="Search Todo" />
                </InputGroup>
              </Col>
              <Col xs="6" md="6" lg="7" className="mt-2">
                <Button className={styles.btn}>Search</Button>
              </Col>
              <Col xs="6" md="6" lg="5" className="mt-2">
                <Button className={styles.btn}>Add new Task</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SearchComp;
