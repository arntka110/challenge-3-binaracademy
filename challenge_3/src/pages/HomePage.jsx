import "../components/modulestyle.module.css";
import ToDoListComp from "../components/ToDoListComp";
import FilterComp from "../components/FilterComp";
import SearchComp from "../components/SearchComp";
import DeleteComp from "../components/DeleteComp";
import { Card, Container } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <Container className="m-5 p-5 justify-content-center align-items-start">
        <Card className="">
          <Card.Body>
            <div className="text-center">
              <h2>Todo Search</h2>
            </div>
            <SearchComp />
            {/* <AddComp /> */}
            <div className="text-center">
              <h3>TodoList</h3>
            </div>
            <FilterComp />
            <ToDoListComp />
            <DeleteComp />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default HomePage;
