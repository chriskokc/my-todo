import "./Addbar.scss";

const Addbar = () => {
  return (
    <div className="add-bar">
      <input
        id="add-bar"
        name="add-bar"
        className="add-bar__field"
        type="text"
        placeholder="add your task here.."
      />
      <span className="add-bar__icon">🙋🏻‍♂️</span>
    </div>
  );
};

export default Addbar;
