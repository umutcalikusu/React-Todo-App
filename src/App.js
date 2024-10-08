import { useSelector } from "react-redux";
import Header from "./components/Header";
import Input from "./components/Input";
import ListContent from "./components/ListContent";

function App() {
  const { todoList } = useSelector((state) => state.todo);
  return (
    <div className="md:container md:mx-auto">
      <Header>
        <Input />
        <ListContent />
      </Header>
    </div>
  );
}

export default App;
