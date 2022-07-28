import "./Addbar.scss";

const Addbar = ({ value, handleUserInput, handleAddItem }) => {
  return (
    <div className="add-bar">
      <input
        id="add-bar"
        name="add-bar"
        className="add-bar__field"
        type="text"
        placeholder="add your task here.."
        value={value}
        onChange={handleUserInput}
      />
      <span className="add-bar__icon" onClick={handleAddItem}>
        🙋🏻‍♂️
      </span>
    </div>
  );
};

export default Addbar;
