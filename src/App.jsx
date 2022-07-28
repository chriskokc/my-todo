import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Addbar from "./components/Addbar/Addbar";
import ItemList from "./containers/ItemList/ItemList";

const App = () => {
  const [message, setMessage] = useState("");
  const [itemList, setItemList] = useState(false);

  const handleUserInput = (event) => {
    setMessage(event.target.value);
  };

  const handleAddItem = () => {
    setItemList(!itemList);
  };

  const handleReset = () => {
    setMessage("");
    setItemList(false);
  };

  return (
    <>
      <Navbar handleReset={handleReset} />
      <Addbar
        value={message}
        handleUserInput={handleUserInput}
        handleAddItem={handleAddItem}
      />
      {itemList && <ItemList />}
    </>
  );
};

export default App;
