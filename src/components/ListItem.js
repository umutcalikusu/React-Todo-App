import { useDispatch } from "react-redux";
import "./ListItem.css";
import { deleteTodo, updateTodo } from "../store/action/todoActions";

const ListItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="list-item hover:bg-gray-200">
      <div className={props.className}>
        <input
          type="checkbox"
          className="mr-4"
          checked={props.item.complete}
          onChange={() => {
            dispatch(updateTodo(props.item.id, !props.item.complete));
          }}
        />
        <span>{props.item.text}</span>
      </div>
      {!props.item.complete && (
        <div
          className="remove-list-item"
          onClick={() => {
            dispatch(deleteTodo(props.item.id));
          }}
        >
          Sil
        </div>
      )}
    </div>
  );
};

export default ListItem;
