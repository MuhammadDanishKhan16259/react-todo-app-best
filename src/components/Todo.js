import React, { useState } from "react";
import "./style.css";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [add, setAdd] = useState([]);
  console.log(add);
  const setData = (e) => {
    // console.log(e.target.value);
    setTodo(e.target.value);
  };

  const additeams = () => {
    setAdd(() => {
      return [...add, todo];
    });
  };
  return (
    <>
      <div className="main-container">
        <div className="todo-box">
          <img src="" alt="todoimg" />
          <h2 className="heading">Write Your Todo List Here</h2>
          <div className="input-container">
            <input
              type="text"
              name="todo"
              onChange={setData}
              value={todo}
              placeholder="Enter Your Task"
            />

            <Tooltip title="Add">
              <Button className="addbtn" onClick={additeams}>
                <AddIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
