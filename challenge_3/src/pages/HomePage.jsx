import "../components/modulestyle.module.css";
import ToDoListComp from "../components/ToDoListComp";
import { Card, Container } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Container className="m-5 p-5 justify-content-center align-items-start">
        <Card className="">
          <Card.Body>
            <ToDoListComp />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default HomePage;
