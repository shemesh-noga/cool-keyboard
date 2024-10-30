import { useState } from "react";
import "./App.css";
import { hebrew, english } from "./languages";
import Keyboard from "./components/Keyboard";
import ButtonSetting from "./components/ButtonSetting";
import Text from "./components/Text";

function App() {
  const [usersText, setUsersText] = useState("Hello Rebbeka");
  console.log(hebrew);
  console.log(english);
  const numbers = [...english].filter((keychar, i) => i < 10);
  const letters = [...english].filter(
    (keychar, i) => i < english.length - 8 && i >= 10
  );
  const special = [...english].filter((keychar, i) => i > english.length - 8);

  function handleClickKey(keyChar) {
    console.log("pressed  " + keyChar + "  hii noga and rebbeka");
    setUsersText(usersText + keyChar);
  }

  function handleSettingClick(id) {
    alert(`entered handleSettingClick from  ${id}`);
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
