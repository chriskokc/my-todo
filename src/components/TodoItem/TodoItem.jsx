import "./TodoItem.scss";

const TodoItem = ({ item, userMessage, handleCheck, handleRemoveItem }) => {
  return (
    <div className="to-do-item">
      <input
        name={`checkbox-${item}`}
        className="to-do-item__checkbox"
        type="checkbox"
        onChange={handleCheck}
      />
      <p className="to-do-item__message">{userMessage}</p>
      <span
        className={`to-do-item__icon to-do-item__icon--${item}`}
        onClick={handleRemoveItem}
      >
        🗑
      </span>
    </div>
  );
};

export default TodoItem;
