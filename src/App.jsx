import { useState, useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Addbar from "./components/Addbar/Addbar";
import ItemList from "./containers/ItemList/ItemList";

const App = () => {
  const [message, setMessage] = useState("");
  const [itemList, setItemList] = useState(false);
  const [toShowList, setToShowList] = useState(false);
  const [toAddList, setToAddList] = useState([]);

  const handleUserInput = (event) => {
    setMessage(event.target.value);
  };

  const handleAddItem = () => {
    if (message === "") {
      alert("Please add your todo.");
      return;
    }
    setToAddList([...toAddList, message]);
    setItemList(!itemList);
  };

  const handleRemoveItem = (event) => {
    const deepCopyToAddList = [...toAddList];

    console.log(event.target.classList[1].split("--")[1]);

    const filteredDeepCopyToAddList = deepCopyToAddList.filter((item) => {
      return item !== event.target.classList[1].split("--")[1];
    });
    setToAddList(filteredDeepCopyToAddList);
  };

  const handleCheck = (event) => {
    const dashIndex = event.target.name.indexOf("-");
    // event.target.name.substring(dashIndex + 1);
    console.log(event.target.name.substring(dashIndex + 1));
  };

  const handleReset = () => {
    setMessage("");
    setToAddList([]);
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
      {{ toShowList } && (
        <ItemList
          tooAddItem={toAddList}
          handleCheck={handleCheck}
          handleRemoveItem={handleRemoveItem}
        />
      )}
    </>
  );
};

export default App;
