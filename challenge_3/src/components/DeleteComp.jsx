import { Row, Col, Button } from "react-bootstrap";

function DeleteComp() {
  return (
    <>
      <Row>
        <Col xs="6" md="6" lg="6" className="mt-3">
          <Button variant="danger" className="w-100">
            Delete done tasks
          </Button>
        </Col>
        <Col xs="6" md="6" lg="6" className="mt-3">
          <Button variant="danger" className="w-100">
            Delete all tasks
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default DeleteComp;
