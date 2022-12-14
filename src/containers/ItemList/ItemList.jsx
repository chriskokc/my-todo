import "./ItemList.scss";
import TodoItem from "../../components/TodoItem/TodoItem";

const ItemList = ({ tooAddItem, handleCheck, handleRemoveItem }) => {
  const ItemJSX = tooAddItem.map((item) => {
    return (
      <TodoItem
        key={item}
        item={item}
        userMessage={item}
        handleCheck={handleCheck}
        handleRemoveItem={handleRemoveItem}
      />
    );
  });
  return <div className="itemlist">{ItemJSX}</div>;
};

export default ItemList;
