import { useState } from "react";
import "./App.css";
import { hebrew, english } from "./languages";
import Keyboard from "./components/Keyboard";
import ButtonSetting from "./components/ButtonSetting";
import Text from "./components/Text";

function App() {
  const [usersText, setUsersText] = useState("Hello Noga, Good morning :)");
  console.log(hebrew);
  console.log(english);
  const numbers = [...english].filter((keychar, i) => i < 10);
  const letters = [...english].filter(
    (keychar, i) => i < english.length - 8 && i >= 10
  );
  const special = [...english].filter((keychar, i) => i > english.length - 8);

  function handleClickKey(keyChar) {
    console.log("pressed  " + keyChar + "  hi Noga and Rebbeka");
    setUsersText(usersText + keyChar);
  }

  function handleDeleteBtn() {
    setUsersText(usersText.substring(0, usersText.length - 1));
  }

  function handleClearBtn() {
    alert(`Entered handle clear btn`);
    setUsersText("");
  }

  function handleCaseChange() {
    alert(`Entered handle case btn`);
  }

  function handleUndoBtn() {
    alert(`Entered handle undo btn`);
  }

  function handleFontBtn() {
    alert(`Entered handle font type btn`);
  }

  function handleFonsizePlusBtn() {
    alert(`Entered handle Font size plus btn`);
    //setUsersText(usersText.style={{fontSize}}); //doesn't work yet
  }

  function handleFonsizeMinusBtn() {
    alert(`Entered handle font size minus btn`);
  }

  function handleColorBtn() {
    alert(`Entered handle color btn`);
  }

  function handleSettingClick(id) {
    switch (id) {
      case "deleteBtn":
        handleDeleteBtn();
        break;
      case "clearBtn":
        handleClearBtn();
        break;
      case "toLowerOrLowerCase":
        handleCaseChange();
        break;
      case "undoBtn":
        handleUndoBtn();
        break;
      case "fontBtn":
        handleFontBtn();
        break;
      case "fonsizePlusBtn":
        handleFonsizePlusBtn();
        break;
      case "fonsizeMinusBtn":
        handleFonsizeMinusBtn();
        break;
      case "colorBtn":
        handleColorBtn();
        break;
      default:
        alert(
          `you've entered handle settings click, but you're id didn't match anythig`
        );
    }
  }

  return (
    <>
      <ButtonSetting
        id="deleteBtn"
        value="Delete"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="clearBtn"
        value="Clear"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="toLowerOrLowerCase"
        value="To lower case"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="undoBtn"
        value="Undo"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="fontBtn"
        value="Font"
        onClickSetting={handleSettingClick}
      />
      <ButtonSetting
        id="fonsizePlusBtn"
        value="+"
        onClickSetting={handleSettingClick}
      />
      <p className="settingsItem"></p>
      <ButtonSetting
        id="fonsizeMinusBtn"
        value="-"
        onClickSetting={handleSettingClick}
      />
      <label for="color">Color:</label>
      <input type="color" id="colorBtn" name="colorBtn" value="#ff0000" />

      <Text key={"text"} textString={usersText} />

      <div id="NumbersDiv">
        {numbers.map((keyChar, i) => (
          <Keyboard
            id={i}
            key={`number-${i}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={english.length}
          />
        ))}
      </div>

      <div id="LettersDiv">
        {letters.map((keyChar, i) => (
          <Keyboard
            id={i + 10}
            key={`letter-${i + 10}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={english.length}
          />
        ))}
      </div>

      <div id="SpecialDiv">
        {special.map((keyChar, i) => (
          <Keyboard
            id={english.length - 8 + i}
            key={`special-${english.length - 8 + i}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={english.length}
          />
        ))}
      </div>
    </>
  );
}

export default App;
