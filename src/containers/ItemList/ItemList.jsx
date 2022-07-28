import "./ItemList.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const ItemList = ({ tooAddItem }) => {
  const ItemJSX = tooAddItem.map((item) => {
    return <TodoItem key={item} item={item} userMessage={item} />;
  });
  return <div className="itemlist">{ItemJSX}</div>;
};

export default ItemList;
