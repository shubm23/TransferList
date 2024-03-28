export default function ActionButton({ buttonStatus, handleAllAction }) {
  return (
    <div className="Col2">
      <div className="ListBox1">
        <div>
          <ul className="ListBoxItems">
            {buttonStatus.length > 0 &&
              buttonStatus.map(({ sign, status }, idx) => (
                <li>
                  <button disabled={!status} onClick={handleAllAction(idx)}>
                    {sign}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
