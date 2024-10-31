import "../styles/Keyboard.css";

function Key(props) {
  function addClass(i, langLength) {
    if (i === langLength - 5) {
      return ["space", "KeySpecial"];
    }
    if (i < 10) {
      return "keyNumber";
    } else if (i > langLength - 8 && i >= 10) {
      return "KeySpecial";
    } else {
      return "KeyLetter";
    }
  }

  return (
    <>
      <button
        id={`${props.id}`}
        className={addClass(props.id, props.langLength) + " KeySingle"}
        onClick={() => props.onclickKey(props.value)}
      >
        {props.value}
      </button>
    </>
  );
}

export default Key;
