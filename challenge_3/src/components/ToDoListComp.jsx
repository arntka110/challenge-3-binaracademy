import { useState } from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { BsTrash3Fill, BsPencilFill } from "react-icons/bs";
import toDoListJSON from "../data/toDoList.json";
import SearchComp from "./SearchComp";
import FilterComp from "./FilterComp";
import DeleteComp from "./DeleteComp";

function ToDoListComp() {
  const [tasks, setTasks] = useState(toDoListJSON);
  const [editTask, setEditTask] = useState("");
  const [isEditTask, setIsEditTask] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, complete: !task.complete };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const onEdited = () => {
    setIsEditTask(!isEditTask);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditTask(taskToEdit.task);
    setIsEditTask(true);
    setSelectedTaskId(taskId);
  };

  const handleSaveTask = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === selectedTaskId) {
        return { ...task, task: editTask };
      }
      return task;
    });
    setTasks(updatedTasks);
    setEditTask("");
    setIsEditTask(false);
    setSelectedTaskId(null);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDeleteDoneTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.complete);
    setTasks(updatedTasks);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  const handleFilterDone = () => {
    const filteredTasks = tasks.filter((task) => task.complete);
    setTasks(filteredTasks);
  };

  const handleFilterAll = () => {
    setTasks(toDoListJSON);
  };

  const handleFilterTodo = () => {
    const filteredTasks = tasks.filter((task) => !task.complete);
    setTasks(filteredTasks);
  };

  const handleSearchTodo = (searchText) => {
    const filteredTasks = tasks.filter((task) =>
      task.task.toLowerCase().includes(searchText.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  const handleAddTodo = (newTodo) => {
    const newTask = {
      id: tasks.length + 1,
      task: newTodo,
      complete: false,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <>
      <SearchComp onSearch={handleSearchTodo} />
      <div className="text-center">
        <h3>TodoList</h3>
      </div>
      <FilterComp
        onFilterDone={handleFilterDone}
        onFilterAll={handleFilterAll}
        onFilterTodo={handleFilterTodo}
      />
      <Row>
        <Form>
          {tasks.map((todo) => (
            <div
              key={todo.id}
              className={`border border-1 rounded-1 m-2 d-flex align-items-center ${
                todo.complete ? "text-muted" : ""
              }`}
            >
              {isEditTask && selectedTaskId === todo.id ? (
                <>
                  <InputGroup>
                    <FormControl
                      type="text"
                      value={editTask}
                      onChange={(e) => setEditTask(e.target.value)}
                    />

                    <Button
                      variant="outline"
                      size="md"
                      className="border-0"
                      onClick={handleSaveTask}
                    >
                      💾
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      className="border-0"
                      onClick={onEdited}
                    >
                      ❌
                    </Button>
                  </InputGroup>
                </>
              ) : (
                <>
                  <span
                    style={
                      todo.complete
                        ? {
                            textDecoration: "line-through",
                            color: "red",
                            marginLeft: "10px",
                          }
                        : { marginLeft: "10px" }
                    }
                  >
                    {todo.task}
                  </span>
                  <Col className="d-flex justify-content-end align-items-center">
                    <Form.Check
                      reverse
                      type="checkbox"
                      id={`todo-${todo.id}`}
                      size="md"
                      checked={todo.complete}
                      onChange={() => handleTaskComplete(todo.id)}
                    />
                    <Button
                      variant="outline"
                      size="md"
                      className="border-0"
                      onClick={() => handleEditTask(todo.id)}
                    >
                      <BsPencilFill color="orange" />
                    </Button>
                    <Button
                      variant="outline"
                      size="md"
                      className="border-0"
                      onClick={() => handleDeleteTask(todo.id)}
                    >
                      <BsTrash3Fill color="red" />
                    </Button>
                  </Col>
                </>
              )}
            </div>
          ))}
        </Form>
      </Row>
      <DeleteComp
        onDeleteDoneTasks={handleDeleteDoneTasks}
        onDeleteAllTasks={handleDeleteAllTasks}
      />
    </>
  );
}

export default ToDoListComp;
