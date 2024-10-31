import { useState } from "react";
import "./App.css";
import { hebrew, englishLowerCase, englishUpperCase } from "./languages";
import Keyboard from "./components/Keyboard";
import ButtonSetting from "./components/ButtonSetting";
import Text from "./components/Text";

function App() {
  const [usersText, setUsersText] = useState("Hello Noga, Good morning :)");
  const [language, setLanguage] = useState(englishUpperCase);
  const [fontSize, setFontSize] = useState(16);
  let size;

  console.log(hebrew);
  console.log(englishLowerCase);
  const numbers = [...language].filter((keychar, i) => i < 10);
  const letters = [...language].filter(
    (keychar, i) => i < language.length - 8 && i >= 10
  );
  const special = [...language].filter((keychar, i) => i > language.length - 8);

  function handleClickKey(keyChar) {
    console.log("pressed  " + keyChar + "  hi Noga and Rebbeka");
    setUsersText(usersText + keyChar);
  }

  function handleDeleteBtn() {
    setUsersText(usersText.substring(0, usersText.length - 1));
  }

  function handleClearBtn() {
    setUsersText("");
  }

  function handleCaseChange() {
    return language === englishUpperCase
      ? setLanguage(englishLowerCase)
      : setLanguage(englishUpperCase);
  }

  function handleUndoBtn() {
    alert(`Entered handle undo btn`);
  }

  function handleFontBtn() {
    alert(`Entered handle font type btn`);
  }

  function handleFonsizePlusBtn() {
    size = fontSize;
    console.log("fontSize:" + fontSize);
    console.log("size:" + size++);
    setFontSize(size++);
  }

  function handleFonsizeMinusBtn() {
    size = fontSize;
    console.log("fontSize:" + fontSize);
    console.log("size:" + size--);
    setFontSize(size--);
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
      {language !== hebrew && (
        <ButtonSetting
          id="toLowerOrLowerCase"
          value={
            language == englishUpperCase ? "To lower case" : "To upper case"
          }
          onClickSetting={handleSettingClick}
        />
      )}

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
      <p className="settingsItem" style={{ fontSize: fontSize }}>
        {fontSize}
      </p>
      <ButtonSetting
        id="fonsizeMinusBtn"
        value="-"
        onClickSetting={handleSettingClick}
      />

      <label for="color">Color:</label>
      <input type="color" id="colorBtn" name="colorBtn" value="#ff0000" />

      <Text key={"text"} textString={usersText} fontSize={fontSize} />

      <div id="NumbersDiv">
        {numbers.map((keyChar, i) => (
          <Keyboard
            id={i}
            key={`number-${i}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={language.length}
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
            langLength={language.length}
          />
        ))}
      </div>

      <div id="SpecialDiv">
        {special.map((keyChar, i) => (
          <Keyboard
            id={language.length - 8 + i}
            key={`special-${language.length - 8 + i}`}
            value={keyChar}
            onclickKey={handleClickKey}
            langLength={language.length}
          />
        ))}
      </div>
    </>
  );
}

export default App;
