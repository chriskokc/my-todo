import { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Addbar from "./components/Addbar/Addbar";
import ItemList from "./containers/ItemList/ItemList";

const App = () => {
  const [message, setMessage] = useState("");
  const [itemList, setItemList] = useState(false);
  const [toShowList, setToShowList] = useState(false);
  const [toAddList, settoAddList] = useState([]);

  const handleUserInput = (event) => {
    setMessage(event.target.value);
  };

  const handleAddItem = () => {
    if (message === "") {
      alert("Please add your todo.");
      return;
    }
    settoAddList([...toAddList, message]);
    setItemList(!itemList);
  };

  const handleReset = () => {
    setMessage("");
    settoAddList([]);
    setItemList(false);
  };

  const getItemList = (itemList) => {
    if (itemList) {
      setToShowList(true);
    }
  };

  useEffect(() => {
    getItemList(itemList);
  }, [itemList]);

  return (
    <>
      <Navbar handleReset={handleReset} />
      <Addbar
        value={message}
        handleUserInput={handleUserInput}
        handleAddItem={handleAddItem}
      />
      {{ toShowList } && <ItemList tooAddItem={toAddList} />}
    </>
  );
};

export default App;
