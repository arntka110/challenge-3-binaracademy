import styles from "./modulestyle.module.css";
import { Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function FilterComp({ onFilterAll, onFilterDone, onFilterTodo }) {
  return (
    <>
      <Row className="my-3 d-flex flex-row justify-content-center align-items-center">
        <Col xs="4" md="4" lg="4">
          <div className="btn-filter">
            <Button className={styles.btn} onClick={onFilterAll}>
              All
            </Button>
          </div>
        </Col>
        <Col xs="4" md="4" lg="4">
          <div className="btn-filter">
            <Button className={styles.btn} onClick={onFilterDone}>
              Done
            </Button>
          </div>
        </Col>
        <Col xs="4" md="4" lg="4">
          <div className="btn-filter">
            <Button className={styles.btn} onClick={onFilterTodo}>
              Todo
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

FilterComp.propTypes = {
  onFilterAll: PropTypes.func,
  onFilterDone: PropTypes.func,
  onFilterTodo: PropTypes.func,
};

export default FilterComp;
