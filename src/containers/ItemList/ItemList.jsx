import "./ItemList.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const ItemList = () => {
  return (
    <div className="itemlist">
      <TodoItem item="1" userMessage="eat some bread" />
      <TodoItem item="2" userMessage="drink more water" />
    </div>
  );
};

export default ItemList;
