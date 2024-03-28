export default function List({ type, list, handleSelection }) {
  return (
    <div className={type === "left" ? "Col1" : "Col2"}>
      <div className="ListBox">
        <ul className="ListBoxItems">
          {list &&
            list.map((el, i) => (
              <li>
                <input
                  onChange={handleSelection(i)}
                  checked={el.checked}
                  type="checkbox"
                />{" "}
                {el.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
