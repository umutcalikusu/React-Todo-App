import { useDispatch, useSelector } from "react-redux";
import "./ListContentFooter.css";
import { setTodoFilter } from "../store/action/todoActions";

const ListContentFooter = () => {
  const { todoFilter, todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="content-footer">
      <div className="left-item">
        {todoList.filter((x) => !x.complete).length + " Kaldı"}
      </div>
      <div
        className={`menu-item ${todoFilter === "all" ? "active" : ""}`}
        onClick={() => {
          dispatch(setTodoFilter("all"));
        }}
      >
        Tümü
      </div>
      <div
        className={`menu-item ${todoFilter === "complete" ? "active" : ""}`}
        onClick={() => {
          dispatch(setTodoFilter("complete"));
        }}
      >
        Tamamlanan
      </div>
    </div>
  );
};

export default ListContentFooter;
