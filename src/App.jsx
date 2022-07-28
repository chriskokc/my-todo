import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Addbar from "./components/Addbar/Addbar";
import ItemList from "./containers/ItemList/ItemList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Addbar />
      <ItemList />
    </div>
  );
};

export default App;
