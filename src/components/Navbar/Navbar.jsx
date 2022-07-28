import Button from "../Button/Button";
import "./Navbar.scss";
import "../Button/Button";

const Navbar = ({ handleReset }) => {
  return (
    <div className="navbar">
      <a href="https://todoist.com/" className="navbar__brand">
        My Todos
      </a>
      <Button label="Reset" onClick={handleReset} />
    </div>
  );
};

export default Navbar;
