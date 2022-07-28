import "./TodoItem.scss";

const TodoItem = ({ item, userMessage }) => {
  return (
    <div className="to-do-item" key={item}>
      <input
        name={`checkbox-${item}`}
        className="to-do-item__checkbox"
        type="checkbox"
      />
      <p className="to-do-item__message">{userMessage}</p>
      <span className="to-do-item__icon">🗑</span>
    </div>
  );
};

export default TodoItem;
