import { useState, useEffect } from "react";
import constant from "../constant/constant";

export default function useHookTransferList() {
  const [state, setState] = useState(constant.state);

  const handleSelection = (type) => (idx) => () => {
    const key = type === "left" ? "list1" : "list2";
    setState((prev) => ({
      ...prev,
      [key]: prev[key].map((el, i) =>
        idx === i
          ? {
              ...el,
              checked: !el.checked,
            }
          : el
      ),
    }));
  };

  const moveAllLeftToRight = () => {
    setState((prev) => ({
      ...prev,
      list1: [],
      list2: prev.list2.concat(prev.list1),
    }));
  };

  const moveAllRightToLeft = () => {
    setState((prev) => ({
      ...prev,
      list1: prev.list1.concat(prev.list2),
      list2: [],
    }));
  };

  const moveOneLeftToRight = () => {
    setState((prev) => ({
      ...prev,
      list1: prev.list1.filter((el) => !el.checked),
      list2: [...prev.list2, ...prev.list1.filter((el) => el.checked)],
    }));
  };

  const moveOneRightToLeft = () => {
    setState((prev) => ({
      ...prev,
      list2: prev.list2.filter((el) => !el.checked),
      list1: [...prev.list1, ...prev.list2.filter((el) => el.checked)],
    }));
  };

  const handleAllAction = (idx) => () => {
    if (idx === 0) {
      moveAllRightToLeft();
    } else if (idx === 1) {
      moveOneRightToLeft();
    } else if (idx === 2) {
      moveOneLeftToRight();
    } else {
      moveAllLeftToRight();
    }
  };

  const disableSingleMoveAction = (key, idx) => {
    const listStatus = state[key].some((el) => el.checked);
    setState((prev) => ({
      ...prev,
      buttonStatus: prev.buttonStatus.map((el, i) =>
        i === idx ? { ...el, status: listStatus } : el
      ),
    }));
  };

  useEffect(() => {
    disableSingleMoveAction("list1", 2);
  }, [state.list1]);

  useEffect(() => {
    disableSingleMoveAction("list2", 1);
  }, [state.list2]);

  return [state, handleSelection, handleAllAction];
}
