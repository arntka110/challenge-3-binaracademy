// import styles from "./StyleSheet.css";
// import { useState } from "react";
import styles from "./modulestyle.module.css";
import { Row, Col, Button } from "react-bootstrap";

function FilterComp() {
  return (
    <>
      <Row className="my-3 d-flex flex-row justify-content-center align-items-center">
        <Col xs="4" md="4" lg="4">
          <div className="btn-filter">
            <Button className={styles.btn}>All</Button>
          </div>
        </Col>
        <Col xs="4" md="4" lg="4">
          <div className="btn-filter">
            <Button className={styles.btn}>Done</Button>
          </div>
        </Col>
        <Col xs="4" md="4" lg="4">
          <div className="btn-filter">
            <Button className={styles.btn}>Todo</Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default FilterComp;
