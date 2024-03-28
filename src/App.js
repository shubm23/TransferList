import "./styles.css";
import React from "react";
import List from "./components/List";
import ActionButton from "./components/ActionButton";
import useHookTransferList from "./hooks/useHookTransferList";

export default function App() {
  const [state, handleSelection, handleAllAction] = useHookTransferList();
  return (
    <div className="App">
      <div className="Box">
        <List
          type={"left"}
          list={state.list1}
          handleSelection={handleSelection("left")}
        />
        <ActionButton
          buttonStatus={state.buttonStatus}
          handleAllAction={handleAllAction}
        />
        <List
          type={"right"}
          list={state.list2}
          handleSelection={handleSelection("right")}
        />
      </div>
    </div>
  );
}
