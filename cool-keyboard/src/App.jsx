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

  function handleSettingClick() {
    alert("entered handleSettingClick");
  }

  return (
    <>
      <ButtonSetting
        id="deleteBut"
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
