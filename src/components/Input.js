import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/action/todoActions";

const Input = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="input-wrapper">
      <input
        value={text}
        onKeyPress={(e) => {
          if (e.key === "Enter" && text.trim() !== "") {
            dispatch(
              addTodo({ id: new Date().getTime(), text, complete: false })
            );
            setText("");
          }
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
        autoFocus
        placeholder="Create New Todo"
      />
    </div>
  );
};

export default Input;
