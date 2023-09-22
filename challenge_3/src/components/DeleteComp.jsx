import { Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function DeleteComp({ onDeleteDoneTasks, onDeleteAllTasks }) {
  return (
    <>
      <Row>
        <Col xs="6" md="6" lg="6" className="mt-3">
          <Button
            variant="danger"
            className="w-100"
            onClick={onDeleteDoneTasks}
          >
            Delete done tasks
          </Button>
        </Col>
        <Col xs="6" md="6" lg="6" className="mt-3">
          <Button variant="danger" className="w-100" onClick={onDeleteAllTasks}>
            Delete all tasks
          </Button>
        </Col>
      </Row>
    </>
  );
}

DeleteComp.propTypes = {
  onDeleteDoneTasks: PropTypes.func,
  onDeleteAllTasks: PropTypes.func,
};

export default DeleteComp;
